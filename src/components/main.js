$(document).ready(function(){
    // slick feature

    $('.feature__list').slick({
        arrows: false,
        dots: true,
        dotsClass: 'feature-indicator__dots feature-indicator',
        customPaging: function() {
            return '<div class="feature-indicator__img"></div>'
        }
    });
    // slick reviews

    $('.reviews__list').slick({
        arrows: false,
        dots: true,
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
        isOpen = !isOpen;
    } else {
        $(".header__nav-img").attr("src", "img/header/menu-close.png");
        $(".header__nav-menu-mobile").toggleClass("header__nav-menu-mobile-close");
        isOpen = !isOpen;
    }
};