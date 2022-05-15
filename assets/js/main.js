$(document).ready(function () {
    const btnMenu = $('#btnMenu')
    const mobileNav = $('#mobileNav')

    const hideMenu = () => {
        $(btnMenu).find('img').attr('src', './assets/images/icon-hamburger.svg').attr('alt', 'icon-hamburger');
        $(mobileNav).hide().addClass('close').removeClass('open');
    }

    const hideMenuFromDesktop = () => {
        if ($(document).width() > 991) {
           hideMenu()
        }
    }

    const toggleMenu = () => {
        if ($(mobileNav).hasClass('close')) {
            $(mobileNav).toggle().addClass('open').removeClass('close');
            $(btnMenu).find('img').attr('src', './assets/images/icon-close.svg').attr('alt', 'icon-close');

        } else if ($(mobileNav).hasClass('open')) {
            hideMenu()
        }
    }


    $(btnMenu).click(function (e) {

        toggleMenu();

    });

    $(window).resize(function () {
        hideMenuFromDesktop()
    });
});