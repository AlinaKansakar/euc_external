// JavaScript Document
(function($) {
    "use strict";



/*==============================================================
// Connect with EUC Student Ambassadors
==============================================================*/
    $('.card-wrap').slick({
        infinite: true,
        speed: 2000,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        focusOnSelect: true,
        touchMove: true,
        adaptiveHeight: true,
        prevArrow: '<div class="slick-prev"><i class="bi bi-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="bi bi-chevron-right"></i></div>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

 })(jQuery);   


