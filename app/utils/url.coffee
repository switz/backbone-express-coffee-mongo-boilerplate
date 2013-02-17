App.utils.getURLParameters = (url) ->
  obj = {}
  _.each url.split('?')[1].split('&'), (param) ->
    split = param.split('=')
    obj[split[0]] = split[1]
  obj

