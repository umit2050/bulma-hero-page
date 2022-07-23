// Scroll Top
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.top').css({'visibility': 'visible'});
    }
    if($(this).scrollTop() < 200){
        $('.top').css({'visibility' : 'hidden'});
    }
});