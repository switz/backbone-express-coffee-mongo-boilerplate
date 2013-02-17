class Application
  # Set your application name here so the document title is set to
  # “Controller title – Site title” (see Layout#adjustTitle)
  title: 'Tweezer'

  initialize: ->
    App.user = new App.Models.User(user)
    App.csrf = csrf if window.csrf
    @initViews()

    # Register all routes and start routing
    App.router = new App.Router()

    Backbone.history.start({ pushState: true })

    @pushAnchors()

  # Instantiate common views
  initViews: ->
    App.notify = new App.Views.Notifications()
    @header = new App.Views.Header()
    @footer = new App.Views.Footer()

  pushAnchors: ->
    # Thanks Gib + Art.sy
    # Globally capture clicks. If they are internal and not in the pass
    # through list, route them through Backbone's navigate method.
    $(document).on "click", "a[href^='/']", (event) ->

      href = $(event.currentTarget).attr('href')

      # chain 'or's for other black list routes
      passThrough = /logout|auth/.test href

      # Allow shift+click for new tabs, etc.
      if !passThrough && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey
        event.preventDefault()

        # Remove leading slashes and hash bangs (backward compatablility)
        url = href.replace(/^\//,'').replace('\#\!\/','')

        # Instruct Backbone to trigger routing events
        App.router.navigate url, { trigger: true }

        return false