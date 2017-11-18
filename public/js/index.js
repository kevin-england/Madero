$(document).ready(function() {
    $.each($('.nav-wrapper').find('li'), function() {
        $(this).toggleClass('active', 
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    }); 
    $(".button-collapse").sideNav();
});

