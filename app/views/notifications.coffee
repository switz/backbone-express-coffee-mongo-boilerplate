class App.Views.Notification extends App.Views.View
  autoRender: true
  tagName: "li"
  events:
    "click a": "close"
  template: JST['notification']
  initialize: ({@message, @title, @type, @sticky, @time, @img}) ->
    super
    @
  render: ->
    @$el
      .hide()
      .html(@template({@message, @title, @img}))
      .addClass(@type)
      .show()
      .attr("data-view", "App.Views.Notification")

    setTimeout(@close, @time) unless @sticky

    @
  close: =>
    $(@el).slideUp("slow")

class App.Views.Notifications extends App.Views.View

  el: '#notifications'
  # Bind to mediator
  send: (title, message, sticky=false, time = 3000, img) =>
    type = "notify"
    notificationEl = new App.Views.Notification({title, message, type, sticky, time, img}).el
    @$el
      .append(notificationEl)
    notificationEl
  render: ->
    @$el.attr("data-view", "App.Views.Notifications")
    @
