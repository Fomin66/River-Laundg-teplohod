$(document).ready(function () {
    $('.menu__icon').click(function () {
        $('.menu__icon').toggleClass('menu__icon_active');
        $('.menu-navigation-container').toggleClass('menu-navigation-container_active');

        $('body').toggleClass('lock');
    });
});