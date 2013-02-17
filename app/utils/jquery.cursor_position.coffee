# Taken from http://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area

$.fn.getCursorPosition = ->
  input = @get(0)
  return  unless input # No (input) element found
  if "selectionStart" of input

    # Standard-compliant browsers
    input.selectionStart
  else if document.selection

    # IE
    input.focus()
    sel = document.selection.createRange()
    selLen = document.selection.createRange().text.length
    sel.moveStart "character", -input.value.length
    sel.text.length - selLen

$.fn.setCursorPosition = (pos) ->
  if $(this).get(0).setSelectionRange
    $(this).get(0).setSelectionRange pos, pos
  else if $(this).get(0).createTextRange
    range = $(this).get(0).createTextRange()
    range.collapse true
    range.moveEnd "character", pos
    range.moveStart "character", pos
    range.select()

$.fn.setCursorRange = (start, end) ->
  @each ->
    if @setSelectionRange
      @focus()
      @setSelectionRange start, end
    else if @createTextRange
      range = @createTextRange()
      range.collapse true
      range.moveEnd "character", end
      range.moveStart "character", start
      range.select()
