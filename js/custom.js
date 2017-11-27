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
        autoplayHoverPause:true,
    }) ;

});