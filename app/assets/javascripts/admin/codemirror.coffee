ready = ->
  $(".codemirror").each (i, block) ->
    CodeMirror.fromTextArea block,
      lineNumbers: true
      mode: "htmlmixed"

$(document).ready(ready)
$(document).on('page:load', ready)
