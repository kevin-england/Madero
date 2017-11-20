$(document).ready(function() {
    /*Navbar active class function to toggle active class*/
    $.each($('.nav-wrapper').find('li'), function() {
        $(this).toggleClass('active', 
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    }); 

    /*Materialize Functions*/
    $(".button-collapse").sideNav();
    $('.carousel').carousel();

    /*Side nav close button function*/
    $('.side-nav-close').click(function() {
      $('.button-collapse').sideNav('hide');
    });
});