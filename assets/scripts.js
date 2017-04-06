$(document).ready(function(){
    $(".js-app-glossary-toggle").on("click", function(e) {
        e.preventDefault();
    })

    // smooth scrolling 
    $('.app-glossary a[href*="#"]:not([href="#"])').click(function() {
        console.log(this);
        var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 500);
            }
    });
})