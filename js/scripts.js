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


  /*----------Stick-price-start-------------*/
  $(window).scroll(function(event) {
    calc = $(".calc");
    calc_price = $(".calc-price");
    if (calc.length !== 0) {
    offset = calc.offset().top;
    height = calc.height() - 30;
    height_price = calc_price.height();
    if ($(window).scrollTop()>offset) {
      calc_price.css('top', $(window).scrollTop()-offset);
    };
    if ($(window).scrollTop()<offset) {
      calc_price.css('top', 0);
    };
    if ($(window).scrollTop()>offset+height-height_price) {
      calc_price.css('top', height-height_price);
    };
    };
  });
  /*----------Stick-price-end-------------*/

  $(".expand").click(function(event) {
    $(".hided").removeClass('hided');
    $(".short-description").addClass('hided');
    return false;

  });
  /*----------Expand-more-------------*/

  /*----------Expand-more-end-------------*/

});