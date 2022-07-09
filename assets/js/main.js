$(function () {

    "use strict";













    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 310) {
            $(".header-menu-area, .header-mobile-menu").removeClass("sticky");
        } else {
            $(".header-menu-area, .header-mobile-menu").addClass("sticky");
        }
        if (scroll < 310) {
            $(".toolbar-area").removeClass("d-none");
        } else {
            $(".toolbar-area").addClass("d-none");
        }
    });


    //===== Mobile Menu

    $('.mobile-menu-open').on('click', function () {
        $('.offcanvas-menu').addClass('open')
        $('.overlay').addClass('open')
    });

    $('.close-mobile-menu').on('click', function () {
        $('.offcanvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });

    $('.overlay').on('click', function () {
        $('.offcanvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });

    /*Variables*/
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active');
                $this.siblings('ul').slideDown();
            }
        }
    });



    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


  // Wow
    new WOW().init();


    // Button hover js 
    
    $('.main-btn, .main-btn-blue').on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
    // $('[href=#]').click(function(){return false});






    //===== Slick Slider

    function mainSlider() {
        var BasicSlider = $('.home-slider');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });


        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 7000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<span class="prev"><i class="flaticon-logout"></i></span>',
            nextArrow: '<span class="next"><i class="flaticon-enter"></i></span>',
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });


        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();






});



