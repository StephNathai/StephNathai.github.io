 $(document).ready(function() {


  $('hr').click(function(){
     $('hr').effect( "shake", {times:4}, 1000 );
  });

  // PROJECT 3 //

  var inputText = $('#inputText');
  var outputText = $('#outputText');

  inputText.on('keyup', function(event){
    event.preventDefault();
    var inputTextValue = $(this).val().toLowerCase();//turns input into lower case
     //this copies text from input and puts it in output

     inputTextValue = inputTextValue.replace('command', '\u2318');
     inputTextValue = inputTextValue.replace('tab', '\u21E5');
     inputTextValue = inputTextValue.replace('return', '\u23CE');
     inputTextValue = inputTextValue.replace('option', '\u2325');
     inputTextValue = inputTextValue.replace('control', '\u005E');
     inputTextValue = inputTextValue.replace('esc', '\u238B');
     inputTextValue = inputTextValue.replace('left', '\u2190');
     inputTextValue = inputTextValue.replace('down', '\u2193');
     inputTextValue = inputTextValue.replace('up', '\u2191');
     inputTextValue = inputTextValue.replace('right', '\u2192');
     inputTextValue = inputTextValue.replace('shift', '\u21E7');
     inputTextValue = inputTextValue.replace('eject', '\u23CF');
     inputTextValue = inputTextValue.replace('caps', '\u21EA');
     inputTextValue = inputTextValue.replace('save', '\u2318 + S');
     inputTextValue = inputTextValue.replace('print', '\u2318 + P');
     inputTextValue = inputTextValue.replace('find', '\u2318 + F');
     var outputTextValue = outputText.val(inputTextValue);

  });
// END OF PROJECT 3//


});
