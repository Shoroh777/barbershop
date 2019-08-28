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
