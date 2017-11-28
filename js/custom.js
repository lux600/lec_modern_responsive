/*========================================
                Services
======================================== */
$(function() {
    //animate on scroll
    new WOW().init();


});

/*========================================
                Work
======================================== */
$(function() {
    //image popup
    $('#work').magnificPopup({
        delegate :'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });

});

/*========================================
                Team
======================================== */
$(function() {
    //Carousel
    $('#team-members').owlCarousel({
        items : 3,
        autoplay : true,
        smartSpeed : 700,
        loop : true,
        autoplayHoverPause:true
    }) ;

});

/*========================================
                Testimonials
======================================== */
$(function() {
    //Carousel
    $('#customers-testimonials').owlCarousel({
        items : 1,
        autoplay : true,
        smartSpeed : 700,
        loop : true,
        autoplayHoverPause:true
    }) ;

});

/*========================================
                Counter
http://ciromattia.github.io/jquery.counterup/demo/index.html
http://imakewebthings.com/waypoints/
======================================== */
$(function() {

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});