// JavaScript Document
(function($) {
    "use strict";

        // Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }


    
/*==============================================================
// Product Slider
==============================================================*/
    $('.testimonial-slider').slick({
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

// Menu
  function closeAllMenus() {
        document.querySelectorAll(".submenu-content").forEach((menu) => menu.classList.remove("open"));
        document.querySelectorAll(".menu-link").forEach((link) => link.classList.remove("active"));
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Setup menu hover and focus interactions
        document.querySelectorAll(".menu-item").forEach((menuItem) => {
            const menuLink = menuItem.querySelector(".menu-link");
            const submenu = menuItem.querySelector(".submenu-content");

            if (menuLink && submenu) {
                // Mouse enter opens submenu
                menuLink.addEventListener("mouseenter", () => {
                    closeAllMenus();
                    submenu.classList.add("open");
                    menuLink.classList.add("active");
                });

                // Mouse leave closes submenu
                menuItem.addEventListener("mouseleave", () => {
                    submenu.classList.remove("open");
                    menuLink.classList.remove("active");
                });

                // Focus in opens submenu
                menuItem.addEventListener("focusin", () => {
                    closeAllMenus();
                    submenu.classList.add("open");
                    menuLink.classList.add("active");
                });

                // Focus out closes submenu if focus moves outside
                menuItem.addEventListener("focusout", () => {
                    setTimeout(() => {
                        if (!menuItem.contains(document.activeElement)) {
                            submenu.classList.remove("open");
                            menuLink.classList.remove("active");
                        }
                    }, 50);
                });
            }
        });

        // Close menus when focus moves to non-menu elements
        document.querySelectorAll(".remove-focus").forEach((element) => {
            element.addEventListener("focus", closeAllMenus);
        });
    });



    // Mobile Menu
    // Mobile menu toggle
    document.addEventListener("DOMContentLoaded", () => {
        // Burger menu click handler
        const burger = document.getElementById("burger");
        const header = document.getElementById("header");

        if (burger && header) {
            burger.addEventListener("click", () => {
                burger.classList.toggle("opened");
                header.classList.toggle("nav-open");
            });
        }

        // First level submenu toggle
        document.querySelectorAll(".open-submenu").forEach((element) => {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const menuItem = e.currentTarget.closest(".menu-item.first-level");
                if (menuItem) {
                    const submenu = menuItem.querySelector(".submenu-content");
                    if (submenu) {
                        submenu.classList.toggle("open");
                    }
                }
            });
        });

        // Second level submenu toggle
        document.querySelectorAll(".third-submenu").forEach((element) => {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const menuItem = e.currentTarget.closest(".menu-item-second.second-level");
                if (menuItem) {
                    const submenu = menuItem.querySelector(".inner-sub-menu");
                    if (submenu) {
                        submenu.classList.toggle("open");
                    }
                }
            });
        });
    });



    // Sub Menu
 $(document).ready(function() {
        // When the open-submenu button is clicked
        $('.open-submenu').on('click', function(e) {
            e.preventDefault();

            // Find the parent menu item and the menu link inside it
            const $menuItem = $(this).closest('.menu-item'); // the parent <li>
            const $menuLink = $menuItem.find('.menu-link'); // find .menu-link within that <li>

            // Toggle the 'active' class on .menu-link
            $menuLink.toggleClass('active');

            // Optional: Toggle the submenu visibility
            $menuItem.find('.submenu').slideToggle();
        });
    });


// Fixed navbar
(function ($) {
  $(document).ready(function () {
    let lastScrollTop = 0;
    const $header = $('#header');
    const $headerBottom = $('.header-bottom');

    if ($header.length && $headerBottom.length) {
      $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop();
        const headerBottomOffset = $headerBottom.offset().top;

        if (currentScroll > lastScrollTop && currentScroll >= headerBottomOffset) {
          $header.addClass('fixed').removeClass('scrolled-up');
        } else if (currentScroll < lastScrollTop) {
          $header.addClass('scrolled-up').removeClass('scrolled-down');
        } else if (currentScroll > lastScrollTop && $header.hasClass('scrolled-up')) {
          $header.addClass('scrolled-down').removeClass('scrolled-up');
        }

        if (currentScroll <= 0) {
          $header.removeClass('fixed scrolled-up scrolled-down');
        }

        lastScrollTop = currentScroll;
      });
    }
  });
})(jQuery);
