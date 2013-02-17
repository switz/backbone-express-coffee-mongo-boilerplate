class App.Router extends Backbone.Router
  routes:
    '': 'index'
    'login': 'login'
    'register': 'register'
    # Last route should catch all
    ':notFound': 'notFound'
  initialize: ->
    @$container = $('#page-container')
    @bind 'all', @_trackPageview
  index: ->
    @changeView(new App.Views.HomePage())
  login: ->
    @changeView(new App.Views.LoginPage())
  register: ->
    @changeView(new App.Views.RegisterPage())
  clearActive: ($current) ->
    $('header ul.right a').removeClass('active')
    if $current
      $current.addClass('active')
  changeView: (view, render = true) =>
    @$container.hide()
    @currentView.close() if @currentView

    if render
      view.render()

    @currentView = view
    @$container.html(view.el).fadeIn('fast')
  notFound: ->
    @navigate '/', trigger: true
  _trackPageview: ->
    url = Backbone.history.getFragment()
    _gaq.push(['_trackPageview', "/#{url}"])
