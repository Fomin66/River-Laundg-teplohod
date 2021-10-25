$(document).ready(function () {
    $('.menu__icon').click(function () {
        // $('.menu__icon').toggleClass('menu__icon_active');
        $('.menu__body').toggleClass('menu__body_active');
        $('.over-header').toggleClass('over-header_active');
        $('.header').toggleClass('header_active');

        $('body').toggleClass('lock');
    });
    $('.slider__body').slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed: 6000,
        pauseOnDotsHover: true,
        waitForAnimate: false
    });
});