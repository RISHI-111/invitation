/* Only in Chrome for now */

/* Inspiration from https://dribbble.com/shots/2508561-Invitation-Sent */
var $plane = $('svg');
var $wrapper = $('.wrapper');
var $sent = $('h2');

$plane.click(function(){
  $wrapper.toggleClass('active'); 
  $(this).fadeOut(1000);
  $sent.delay(1000).fadeIn(100);
});

// $('button').click(function(){
//   $plane.fadeIn(300);
//   $wrapper.removeClass('active');
//   $sent.fadeOut(250);
// });


