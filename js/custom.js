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
        const typingElement = $('#typing');

        if (typingElement.length) {
            const text = (typingElement.data('typing-text') || '').toString().trim();

            if (text.length) {
                typingElement
                    .css({ display: 'inline-block', visibility: 'hidden' })
                    .text(text);

                const placeholderWidth = typingElement.outerWidth();

                typingElement
                    .text('')
                    .css({
                        visibility: 'visible',
                        minWidth: `${placeholderWidth}px`,
                    });

                let index = 0;

                const type = () => {
                    if (index < text.length) {
                        typingElement.text(typingElement.text() + text.charAt(index));
                        index++;
                        setTimeout(type, 200); // typing speed in milliseconds
                    }
                };

                // Start typing after a small delay
                setTimeout(type, 500);
            }
        }

        /*==============================================================
        // Card Slider
        =============================================================*/
        $('.card-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1000,
        fade: true,
        autoplay: true,
        arrows: false,
        cssEase: 'linear'
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
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
            ]
        });

    });

// Top Bar Menu
$(document).ready(function() {
    // Make first menu item active by default
    $('.top-left ul li a:first').addClass('active');

    // On click, switch active class
    $('.top-left ul li a').click(function(e) {
        e.preventDefault(); // prevent default link behavior if needed
        $('.top-left ul li a').removeClass('active'); // remove active from all
        $(this).addClass('active'); // add active to clicked
    });
});



// Header Menu
$(document).ready(function() {
    var $searchBtn = $('.searchBtn');
    var $closeBtn = $('.closeBtn');
    var $searchBox = $('.searchBox');
    var $header = $('.header-menu');
    var $menuToggle = $('.menuToggle');
    var $navigation = $('.navigation'); // select the menu

    // Open search
    $searchBtn.on('click', function() {
        $searchBox.addClass('active');    // show search box
        $closeBtn.addClass('active');     // show close icon
        $searchBtn.addClass('hide');      // hide search icon
        $menuToggle.addClass('hide');     // hide menu toggle on mobile

        $navigation.addClass('hidden');   // hide menu only on mobile (CSS handles media query)
        $header.removeClass('open');      // close mobile menu if it was open
    });

    // Close search
    $closeBtn.on('click', function() {
        $searchBox.removeClass('active'); // hide search box
        $closeBtn.removeClass('active');  // hide close icon
        $searchBtn.removeClass('hide');   // show search icon
        $menuToggle.removeClass('hide');  // show menu toggle

        $navigation.removeClass('hidden'); // show menu again on mobile
    });

    // Toggle mobile menu
    $menuToggle.on('click', function() {
        $header.toggleClass('open');       // toggle menu
        $searchBox.removeClass('active');  // hide search box if open
        $closeBtn.removeClass('active');   // hide close icon
        $searchBtn.removeClass('hide');    // show search icon
        $navigation.removeClass('hidden'); // ensure menu shows on mobile
    });
});




// Sticky Menu
$(document).ready(function() {

    function updateHeader() {
        var currentScroll = $(window).scrollTop();
        var menu = $('.main-menu');
        var logo = menu.find('.logo img');

        if (currentScroll > 50) {
            menu.addClass('is-sticky');
            logo.attr('src', 'images/euc-logo.svg'); // sticky logo
        } else {
            menu.removeClass('is-sticky');
            logo.attr('src', 'images/euc-logo-white.svg'); // default logo
        }
    }

    // Run on page load
    updateHeader();

    // Run on scroll
    $(window).on('scroll', updateHeader);

});



// FadeBottom
$(document).ready(function () {
  $('.card-content p').addClass('animate');
});



})(jQuery);
