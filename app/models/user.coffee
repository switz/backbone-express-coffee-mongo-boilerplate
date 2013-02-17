class App.Models.User extends App.Models.Model
  url: ->
    '/api/v1/me'
  loggedIn: ->
    !!@get('email')
  reset: ->
    if @loggedIn()
      App.router.navigate '/', trigger: true
