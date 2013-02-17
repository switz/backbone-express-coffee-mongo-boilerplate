mongoose = require("mongoose")
Schema = mongoose.Schema
bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10
MAX_LOGIN_ATTEMPTS = 5
LOCK_TIME = 2 * 60 * 60 * 1000

EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

validateEmail = (email) ->
  EMAIL_REGEX.test email

UserSchema = new Schema
  email: type: String, index: { unique: true }
  password: type: String
  loginAttempts: type: Number, required: true, default: 0
  lockUntil: type: Number

UserSchema.virtual("isLocked").get ->
  # check for a future lockUntil timestamp
  !!(@lockUntil and @lockUntil > Date.now())

# Pre save hook
UserSchema.pre 'save', (next) ->
  user = this

  return false unless (user.email && user.password)

  return next() unless user.isModified('password')

  bcrypt.genSalt SALT_WORK_FACTOR, (err, salt) ->
    return next(err) if err

    bcrypt.hash user.password, salt, (err, hash) ->
      return next(err) if err

      user.password = hash
      next()

# Methods

UserSchema.methods.comparePassword = (candidatePassword, callback) ->
  bcrypt.compare candidatePassword, @password, (err, isMatch) ->
    return callback(err) if err

    callback null, isMatch

UserSchema.methods.incLoginAttempts = (callback) ->
  # if we have a previous lock that has expired, restart at 1
  if @lockUntil and @lockUntil < Date.now()
    return @update(
      $set:
        loginAttempts: 1
      $unset:
        lockUntil: 1
    , callback)

  # otherwise we're incrementing
  updates = $inc:
    loginAttempts: 1

  # lock the account if we've reached max attempts and it's not locked already
  updates.$set = lockUntil: Date.now() + LOCK_TIME  if @loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS and not @isLocked
  @update updates, callback

# Statics
reasons = UserSchema.statics.failedLogin =
  NOT_FOUND: 0
  PASSWORD_INCORRECT: 1
  MAX_ATTEMPTS: 2

UserSchema.statics.authenticate = (email, password, callback) ->
  @findOne
    email: email
  , (err, user) ->
    return callback(err) if err
    # make sure the user exists
    return callback(null, null, reasons.NOT_FOUND) unless user

    if user.isLocked
      # increment login attempts if account is already locked
      return user.incLoginAttempts (err) ->
        return callback(err) if err
        callback null, null, reasons.MAX_ATTEMPTS

    # test for a matching password
    user.comparePassword password, (err, isMatch) ->
      return callback(err) if err

      if isMatch
        # if there's no lock or failed attempts, just return the user
        # thanks De Morgan
        unless user.loginAttempts || user.lockUntil
          return callback(null, user)

        # reset attempts and lock info
        updates =
          $set:
            loginAttempts: 0

          $unset:
            lockUntil: 1

        return user.update updates, (err) ->
          return callback(err) if err
          callback null, user

      # password is incorrect, so increment login attempts before responding
      user.incLoginAttempts (err) ->
        return callback(err) if err
        callback null, null, reasons.PASSWORD_INCORRECT

# Set Mongoose Model
module.exports = mongoose.model "User", UserSchema
