 $(document).ready(function() {

   // hr shake
  $('hr').click(function(){
     $('hr').effect( "shake", {times:4}, 1000 );
  });

  // PROJECT 3 //

  var inputText = $('#inputText');
  var outputText = $('#outputText');

  inputText.on('keyup', function(event){
    event.preventDefault();
    var inputTextValue = $(this).val().toLowerCase();

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
// PROJECT 4//

$('.button-weather').click(function(event) {
    event.preventDefault();
    var city = $(".input-weather").val();
    var cityTemp = event.currentTarget.dataset.temp;

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=c77516d3ecaeb55d83a1ea355bc85dca",
      method: 'GET',
      data: {temp: cityTemp},
      success: function(data, status, xr) {
        console.log("Data successful", data.main);
        $('#forecast').text("In " + city + ", it's " + ((((data.main.temp - 273) * 1.8) + 32).toFixed(2)) + " degrees F");
      },
      error: function(xhr, status, error) {
        console.log("yikes", error);
      }
    });


  });
// PROJECT 5

var minuteHand = $('#minute-hand');
var secondHand = $('#second-hand');
var hourHand = $('#hour-hand');
var date

var clock = function(){
  var secondDegs = 0;
  var minuteDegs = 0;
  var hourDegs = 0;
  var time = window.setInterval(function(){
    secondDegs += 6;
    minuteDegs += 1/10;
    hourDegs += 1/120;
    secondHand.css("transform", "rotate(" + secondDegs + "deg)");
    minuteHand.css("transform", "rotate(" + minuteDegs + "deg)");
    hourHand.css("transform", "rotate(" + hourDegs + "deg)");
  }, 1000);

}
$(document).on("load", clock());

// PROJECT 6

  setInterval(function(){
    var shiftX = Math.random()*20;
    var shiftY = Math.random()*20;
    $('#left-pupil, #right-pupil').velocity({translateX: shiftX, translateY: shiftY}, 1000)//speed of animation
  }, 500) //being called every half second

// PROJECT DIV BORDER ENTER/EXIT

  $('div.border')
    .mouseenter(function() {
       $(this).css({"border-width":"3px"});
    })
    .mouseleave(function() {
       $(this).css({"border-width":"thin"});
    });
//


});
