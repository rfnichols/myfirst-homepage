$(document).ready(function() {
  
  $('#pro, #music, #podcast, #games').click(function() {
    var MyColor = $(this).css('background-color');
    $('#probody').css({'background-color': MyColor});
  });
});
  
