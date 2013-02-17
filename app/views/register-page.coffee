{ validateEmail } = App.utils.validate

class App.Views.RegisterPage extends App.Views.View
  className: 'register-page'
  template: JST['register']
  events:
    'keyup input.email'   : 'email'
    'keyup input.password': 'password'
  render: ->
    App.router.clearActive($('header .register'))
    if window.location.search
      params = App.utils.getURLParameters(window.location.search)
      switch params.err
        when 'emailexists' then App.notify.send('Error', "This email is already in use. But you knew that already, didn't you?")
        when 'pleaseregister' then App.notify.send('Please Register', "Or don't. I don't care.")
    @$el.html @template
      csrf: App.csrf

    @$email = @$el.find('.email')
    @$password = @$el.find('.password')
    @submitButton = @$el.find('form input[type="submit"]')
  email: (e) ->
    unless validateEmail @$email.val()
      @button true
      return @$email.siblings('.invalid').show()
    @button()
    @$email.siblings('.invalid').hide()
  password: (e) ->
    if @$password.val().length < 6
      @button true
      return @$password.siblings('.invalid').show()
    @button()
    @$password.siblings('.invalid').hide()
  button: (hide) ->
    disabled = 'disabled'
    unless hide
      disabled = false
    @submitButton.attr 'disabled', disabled
