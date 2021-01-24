'use strict'
const body = document.querySelector('body');

//----------------------------------------------------------------------
const burger = document.querySelector('.header__burger');

if (burger !== null) {
    const menu = document.querySelector('.menu');
    const menuTop = document.querySelector('.header__menu-top');
    burger.addEventListener('click', function () {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
        menuTop.classList.toggle('_active');

    });
}

//----------------------------------------------------------------------

const clientHeight = document.documentElement.clientHeight;
const btnUp = document.querySelector('.btn-up');
let scrolled;
let timer;

function addClassBtn() {
    if (window.pageYOffset > clientHeight) {
        btnUp.classList.add('show');
    } else { btnUp.classList.remove('show'); }
}

btnUp.addEventListener('click', function () {
    scrolled = window.pageYOffset;
    scrollToTop();
});

function scrollToTop() {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 25;
        timer = setTimeout(scrollToTop, 10);
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
}


window.onscroll = addClassBtn


//----------------------------------------------------------------------

var isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
    body.classList.add('_touch');
    const arrow = document.querySelectorAll('.arrow_next');
    for (let i = 0; i < arrow.length; i++) {
        const subMenu = arrow[i].nextElementSibling;
        const thisLink = arrow[i].previousElementSibling;
        const thisArrow = arrow[i];



        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('_open');
            thisLink.classList.toggle('_open');
            thisArrow.classList.toggle('_open');
        });
    }

} else {
    body.classList.add('_mouse');
}


const arrowBack = document.querySelectorAll('.arrow_back');

for (let i = 0; i < arrowBack.length; i++) {
    const subMenu = arrowBack[i].parentElement;
    const thisLink = arrowBack[i].parentElement.parentElement.childNodes[1];
    const thisArrow = arrowBack[i].parentElement.previousElementSibling;

    arrowBack[i].addEventListener('click', function () {
        subMenu.classList.remove('_open');
        thisLink.classList.remove('_open');
        thisArrow.classList.remove('_open');
    });
}


//----------------------------------------------------------------------

new Swiper('.slider-customer', {
    navigation: {
        nextEl: '.slider-customer__button-n',
        prevEl: '.slider-customer__button-p'
    },

    slidesPerView: 4,

    slidesPerGroup: 1,

    spaceBetween: 10,

    watchOverflow: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
})

new Swiper('.slider', {
    pagination: {
        el: '.slider__pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    watchOverflow: true,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    grabCursor: true,
    spaceBetween: 30,

});









function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
$(window).resize(function (event) {
    adaptive_function();
});


function adaptive_header(w, h) {

    var headerMenuTop = $('.header__menu-top');
    var headerBottom = $('.header__bottom');
    var headerMenu = $('.header__menu');


    if ((w < 1466) && (w > 768)) {
        if (!headerMenu.hasClass('_done')) {
            headerMenu.addClass('_done').appendTo(headerBottom);
        }


    } else {
        if (headerMenu.hasClass('_done')) {
            headerMenu.removeClass('_done').appendTo(headerMenuTop);
        }
    }

    var contactsHeader = $('.contacts-header__body');
    var headerСontacts = $('.header__contacts');


    if (w < 769) {
        if (!contactsHeader.hasClass('_done')) {
            contactsHeader.addClass('_done').appendTo(headerMenu);
        }

    } else {
        if (contactsHeader.hasClass('_done')) {
            contactsHeader.removeClass('_done').appendTo(headerСontacts);
        }
    }


    var headerSearch = $('.header__search');
    var headerTop = $('.header__top');


    if (w < 769) {
        if (!headerSearch.hasClass('_done')) {
            headerSearch.addClass('_done').prependTo(headerMenu);
        }

    } else {
        if (headerSearch.hasClass('_done')) {
            headerSearch.removeClass('_done').appendTo(headerTop);
        }
    }

}
function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();







