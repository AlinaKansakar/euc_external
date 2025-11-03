// JavaScript Document
(function($) {
    "use strict";

/*==============================================================
// Counter
==============================================================*/
     document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.counter');
        const speed = 150; // smaller = faster

        const animateCounters = () => {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let current = 0;

                const updateCount = () => {
                    const increment = Math.ceil(target / speed);
                    if (current < target) {
                        current += increment;
                        counter.textContent = current + '+';
                        setTimeout(updateCount, 20);
                    } else {
                        counter.textContent = target + '+';
                    }
                };

                updateCount();
            });
        };

        // Trigger when counter becomes visible on scroll
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect(); // Run only once
                }
            });
        }, { threshold: 0.6 });

        if (counters.length > 0) {
            observer.observe(counters[0]);
        }
    });
    
/*==============================================================
// Typing
==============================================================*/
     const text = "ProudToBeEUC"; // text to type
    const typingElement = document.getElementById("typing");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); // typing speed in milliseconds
        }
    }

    // Start typing after a small delay (optional)
    setTimeout(type, 500);


/*==============================================================
// Card Slider
==============================================================*/
    $(document).ready(function() {
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
    });
/*==============================================================
// Card Testimonial
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