//Toggle Mobile Menu

$('.menu-toggle, .mobile-menu-scrim').click(function(){
    $('.slide-out-nav, .mobile-menu-scrim').toggleClass('open');
})

$('.mobile-menu-scrim').click(function(){
    $('.slide-out-nav, .mobile-menu-scrim').removeClass('open');
})