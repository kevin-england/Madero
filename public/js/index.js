$(document).ready(function() {
    /*Navbar active class function to toggle active class*/
    $.each($('.nav-wrapper').find('li'), function() {
        $(this).toggleClass('active', 
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    }); 

    /*Materialize Functions*/
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.parallax').parallax();
    $('.slider').slider({
        height: 500,
    });

    /*Side nav close button function*/
    $('.side-nav-close').click(function() {
      $('.button-collapse').sideNav('hide');
    });

    /* Materialize FeatureDiscovery Component */
    $('.blurb').click(function() {
        $('.tap-target').tapTarget('open');
    })

    /*Materialize Pushpin Component*/
    $('.pushpin').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });
        
});