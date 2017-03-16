$(document).ready(function(){
    $(".js-app-glossary-toggle").on("click", function(e) {
        e.preventDefault();
    })

    // smooth scrolling 
    $('a[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 500);
                return false;
            }
    });
})