class App.Views.Header extends App.Views.View
  autoRender: true
  el: 'header'
  template: JST['header']
  initialize: ->
    super
  render: ->
    @$el.html @template
      loggedIn: App.user.loggedIn()
