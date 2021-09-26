//Script que hace cambiar de color el menu superior si se hace un scroll > 60px
$(window).scroll(function(){
    var scrl = $(window).scrollTop();
    if(scrl < 60){
        $('.header-1').removeClass('fixedbar');
    }else{
        $('.header-1').addClass('fixedbar');
    }
})