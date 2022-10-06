$(document).ready(function(){
    $(window).on('scroll',function(){
        let position = $('#pr').offset();
        if($(window).scrollTop()>=position.top*0.2){
            $('header').removeClass('transparent');
        }else{
            $('header').addClass('transparent');
        }
    })
})