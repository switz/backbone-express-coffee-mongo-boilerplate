window.App =
  "Models": {}
  "Collections": {}
  "Views": {}
  "Controllers": {}
  "Router": {}
  "utils": {}

$ ->
  $.getJSON '/api/v1/me/csrf', (data) ->
    App.csrf = data.csrf
  # Initialize App
  Tweezer = new Application().initialize()

  # Bind to every ajax send
  $(document).ajaxSend (e, xhr, options) ->
    if App.csrf
      xhr.setRequestHeader "X-CSRF-Token", App.csrf
    else
      $.getJSON '/api/v1/me/csrf', (data) ->
        App.csrf = data.csrf
        xhr.setRequestHeader "X-CSRF-Token", data.csrf

