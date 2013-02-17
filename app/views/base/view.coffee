class App.Views.View extends Backbone.View
  initialize: ->
    if @autoRender
      @render()
  render: ->
    if @$el and @template
      @$el.html @template()
  close: ->
    @remove()
    @unbind()
