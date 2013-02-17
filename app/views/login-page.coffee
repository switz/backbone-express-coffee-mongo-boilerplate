class App.Views.LoginPage extends App.Views.View
  className: 'login-page'
  template: JST['login']
  render: ->
    @checkErr()
    @$el.html @template
      csrf: App.csrf
    App.router.clearActive($('header .login'))
  checkErr: ->
    if window.location.search
      params = App.utils.getURLParameters(window.location.search)
      switch params.err
        when "0" then App.notify.send('Error', "No User Found", false, 4000)
        when "1" then App.notify.send('Error', "Password Incorrect", false, 4000)
        when "2" then App.notify.send('Error', "Logged in too many times, try again later.", false, 4000)
