$(document).ready(function(){
    // slick feature

    $('.feature__list').slick({
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1000000000,
                settings: "unslick"
            }
        ],
        dotsClass: 'feature-indicator__dots feature-indicator',
        customPaging: function() {
            return '<div class="feature-indicator__img"></div>'
        }
    });
    // slick reviews

    $('.reviews__list').slick({
        prevArrow: $('.reviews__control-left'),
        nextArrow: $('.reviews__control-right'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                }
            },
            {
                breakpoint: 120000,
                settings: {
                    dots: true,
                }
            }
        ],
        dotsClass: 'news-indicator__dots news-indicator',
        customPaging: function() {
            return '<div class="news-indicator__img"></div>'
        }
    });
});

var menuImg = document.querySelector('.header__nav-img');
var isOpen = false;


function openMenu() {
    if (isOpen) {
        $(".header__nav-img").attr("src", "img/header/menu-button.png");
        $(".header__nav-menu-mobile").toggleClass("header__nav-menu-mobile-close");
        $(".header__nav").toggleClass("header__nav--open");
        $(".logo").toggleClass("logo-nav--open");
        isOpen = !isOpen;
    } else {
        $(".header__nav-img").attr("src", "img/header/menu-close.png");
        $(".header__nav-menu-mobile").toggleClass("header__nav-menu-mobile-close");
        $(".header__nav").toggleClass("header__nav--open");
        $(".logo").toggleClass("logo-nav--open");
        isOpen = !isOpen;
    }
};