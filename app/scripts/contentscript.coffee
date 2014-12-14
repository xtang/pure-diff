pureDiff = ->
  spans = document.querySelectorAll('#files span')
  for span in spans
    if span.className?.indexOf("pl-") >= 0
      span.className = ''

pureDiff()

