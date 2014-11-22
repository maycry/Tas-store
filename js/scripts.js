jQuery(document).ready(function($) {

  /*-------languages-start-------*/
  $(".language-current").click(function(event) {
    event.stopPropagation();
    $(this).toggleClass('active');
    $(this).toggleClass('hover');
    $(".language-popup").toggle();
  });
  $(".language-current").mouseover(function(event) {
    if (!$(this).hasClass('active')) {
      $(this).addClass('hover')
    };
  });
  $(".language-current").mouseleave(function(event) {
    if (!$(this).hasClass('active')) {
      $(this).removeClass('hover')
    };
  });
  $(".language-popup").click(function(event) {
    event.stopPropagation();
  });
  $(document).bind('keydown', function(e) { 
    if (e.which == 27) {
      $(".language-popup").hide();
      $(".language-current").removeClass('active');
    }
  });
  $("html").click(function(event) {
    $(".language-popup").hide();
    $(".language-current").removeClass('active');
  });
  /*-------languages-end-------*/
});