$('.toggle-drawer').click(function(){
    $('.drawer').toggleClass('open');
})

$('.close-drawer, .close').click(function(){
    $('.drawer').removeClass('open');
})


$('.show-modal').click(function(){
    $('.modal, .modal-overlay').addClass('open');
})

$('.modal-overlay, .modal .close, .modal .close-modal').click(function(){
    $('.modal, .modal-overlay').removeClass('open');
})