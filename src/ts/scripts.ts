$(document).ready(function(){
  // smooth scrolling
  $('.app-glossary a[href*="#"]:not([href="#"])').click(function() {
    var target = $((this as any).hash);
    console.log(target);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 119 // fixed-header height
        }, 500);
      }
  });
})