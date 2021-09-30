//Script que hace cambiar de color el menu superior si se hace un scroll > 60px
$(window).scroll(function(){
    var scrl = $(window).scrollTop();
    if(scrl < 60){
        $('.header-1').removeClass('fixedbar');
    }else{
        $('.header-1').addClass('fixedbar');
    }
})

//Funcion para delizar hacia los lados cada slide
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    /*Trae todos los elementos con esa misma clase*/
    var slides = document.getElementsByClassName("myslides");
  
    if(n > slides.length){
        slideIndex = 1
    }

    if(n < 1){

        slideIndex = slides.length

    }

    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }

    slides[slideIndex-1].style.display ="block";
}

/*Script para que funcion Magnific PopUp*/

(function($){
    "use strict";
    $('.anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        perloader: false,
        midClick: true,
        removeDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
})(jQuery);

/*Script para efecto al momento de clickear en la barra superior un menu*/

$(function(){
    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});