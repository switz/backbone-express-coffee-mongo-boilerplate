class App.Views.HomePage extends App.Views.View
  className: 'home-page'
  template: JST['home']
  render: =>
    @checkErr()
    App.router.clearActive()

    @$el.html @template
      loggedIn: App.user.loggedIn()

    @
  checkErr: ->
    if window.location.search
      params = App.utils.getURLParameters(window.location.search)
      switch params.err
        # title, message, sticky (boolean), length (milliseconds)
        when "maxProviders" then App.notify.send('Error', "This is how you send an error notification.", false, 4000)
