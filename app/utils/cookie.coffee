# http://www.quirksmode.org/js/cookies.html

# Custom cookie function
cookie = (name, value, days) ->
  if value
    createCookie name, value, days
  else
    readCookie name

createCookie = (name, value, days = 7) ->
  if days
    date = new Date()
    date.setTime(date.getTime()+(days*24*60*60*1000))
    expires = "; expires="+date.toGMTString()
  else
    expires = ""
  document.cookie = name + "=" + value + expires + "; path=/"

readCookie = (name) ->
  nameEQ = name + "="
  ca = document.cookie.split(';')
  for c in ca
    while (c.charAt(0)==' ')
      c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) then result = c.substring(nameEQ.length, c.length)
  result

deleteCookie = (name) ->
  createCookie(name,"",-1);

App.utils.cookie = { cookie, createCookie, readCookie, deleteCookie }