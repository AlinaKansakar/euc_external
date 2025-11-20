// JavaScript Document
(function($) {
    "use strict";

    $(document).ready(function() {

        /*==============================================================
        // Counter
        =============================================================*/
        const counters = $('.counter');
        const speed = 150; // smaller = faster

        const animateCounters = () => {
            counters.each(function() {
                const $counter = $(this);
                const target = parseInt($counter.attr('data-target'), 10);
                let current = 0;

                const updateCount = () => {
                    const increment = Math.ceil(target / speed);
                    if (current < target) {
                        current += increment;
                        $counter.text(current + '+');
                        setTimeout(updateCount, 20);
                    } else {
                        $counter.text(target + '+');
                    }
                };
                updateCount();
            });
        };

        // Trigger animation when counter is visible
        if (counters.length > 0) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.disconnect(); // run only once
                    }
                });
            }, { threshold: 0.6 });

            observer.observe(counters[0]);
        }


        /*==============================================================
        // Typing
        =============================================================*/
        const text = "ProudToBeEUC"; // text to type
        const typingElement = $('#typing');
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.text(typingElement.text() + text.charAt(index));
                index++;
                setTimeout(type, 200); // typing speed in milliseconds
            }
        }

        // Start typing after a small delay
        setTimeout(type, 500);


        /*==============================================================
        // Card Slider
        =============================================================*/
        $('.card-slider').slick({
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            infinite: true,
            pauseOnHover: false,
            vertical: true, // vertical scroll
            speed: 1000,
            autoplaySpeed: 2000,
            adaptiveHeight: true,
            draggable: false,
            swipe: false,
        });


        /*==============================================================
        // Card Testimonial
        =============================================================*/
        $('.card-wrap').slick({
            infinite: true,
            speed: 2000,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            focusOnSelect: true,
            touchMove: true,
            adaptiveHeight: true,
            prevArrow: '<div class="slick-prev"><i class="bi bi-chevron-left"></i></div>',
            nextArrow: '<div class="slick-next"><i class="bi bi-chevron-right"></i></div>',
            responsive: [
                 {
                    breakpoint: 1660,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                   {
                 breakpoint: 767,
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

    });

})(jQuery);
