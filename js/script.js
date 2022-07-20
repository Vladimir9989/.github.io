// Бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-top__menu');
let menuLinks = menu.querySelectorAll('.header-top__link');

burger.addEventListener('click',
    function() {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header-top__menu--active')

        document.body.classList.toggle('stop-scroll');
    }
)

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');

        menu.classList.remove('header-top__menu--active');

        document.body.classList.remove('stop-scroll');
    })
});

// Открытие и закрытие поиска

let search = document.querySelector('.header-top__btn-icon');
let searchMenu = document.querySelector('.header-search');
let searchClose = document.querySelector('.header-search__close');
let searchAbsolute = document.querySelector('.header-top__search')


search.addEventListener('click',
    function() {
        searchMenu.classList.add('header-search--active');
        searchAbsolute.classList.add('header-top__search--absolute');
        searchClose.classList.add('header-search__close--active')
    });

searchClose.addEventListener('click',
    function() {
        searchMenu.classList.remove('header-search--active');
        searchAbsolute.classList.remove('header-top__search--absolute');
        searchClose.classList.remove('header-search__close--active');
    });


// Выпадающие списки header
function controlDropdowns() {
    const dropdownButtons = document.querySelectorAll('.header-bottom-nav__btn');

    dropdownButtons.forEach((dropdownButton) => {
        dropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const dropdown = dropdownButton.nextElementSibling;
            if (dropdown.classList.contains('header-dropdown__container--visible')) {
                dropdown.classList.remove('header-dropdown__container--visible');
                dropdownButton.classList.remove('header-bottom-nav__svg');
            } else {
                closeDropdowns();
                dropdown.classList.add('header-dropdown__container--visible');
                dropdownButton.classList.add('header-bottom-nav__svg');
                getLink(dropdown);
            };
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('header-dropdown__container')) {
            return;
        } else {
            closeDropdowns();
        };
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeDropdowns();
        };
    });

};

function closeDropdowns() {
    const dropdownButtons = document.querySelectorAll('.header-bottom-nav__btn');
    dropdownButtons.forEach((dropdownButton) => {
        dropdownButton.classList.remove('header-bottom-nav__svg');
        dropdownButton.nextElementSibling.classList.remove('header-dropdown__container--visible');
    });
};

function getLink(dropdown) {
    const dropdownLiks = dropdown.querySelectorAll('.header-dropdown__link');
    dropdownLiks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            closeDropdowns();
        });
    });
};

controlDropdowns();



document.querySelectorAll('.header-dropdown__list').forEach(el => {
    new SimpleBar(el)

});

// слайдеры в hero

const heroSlider = document.querySelector('.hero-swiper-container');
const mySwiperHero = new Swiper(heroSlider, {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    pagination: {
        el: false,
    },
    autoplay: {
        delay: 3000,
    },
});

// Селект в галереи

const selectGallery = () => {
    const item = document.querySelector('.gallery__select');
    const choices = new Choices(item, {
        searchEnabled: false,
        itemSelectText: '',
        sorter: function(a, b) {},
    });
};

selectGallery();

// Слайдер галереи 

const gallerySlider = document.querySelector('.gallery-swiper-container');
const mySwiperGallery = new Swiper(gallerySlider, {
    slidesPerView: 3,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 1,
    slidesPerGroup: 3,
    spaceBetween: 50,
    direction: 'horizontal',

    pagination: {
        el: '.gallery-button__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
        },

        577: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 36,
            slidesPerGroup: 2,
        },

        769: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 38,
            slidesPerGroup: 2,
        },



        1411: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 45,
            slidesPerGroup: 3,
        },
    }
});

// Каталог аккардион

const newLocal = $(function() {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: 0,
        icons: { "header": "ui-icon-plus" }
    });
});

// Каталог художники


let tabsBtn = document.querySelectorAll('.catalog-accordion__artist');
let tabsItem = document.querySelectorAll('.catalog__artist');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('catalog-accordion__btn--active') });
        e.currentTarget.classList.add('catalog-accordion__btn--active');

        tabsItem.forEach(function(element) { element.classList.remove('artist--visible') });
        document.querySelector(`[data-target="${path}"]`).classList.add('artist--visible');

    });
});

// Слайдер события

const eventsSlider = document.querySelector('.events-swiper-container');
const myEventsGallery = new Swiper(eventsSlider, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    pagination: {
        el: '.events-button__pagination',

    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
        },

        577: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },

        870: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 25,
            slidesPerGroup: 3,
        },

        1411: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    }
});

// Слайдер проекты

const projectsSlider = document.querySelector('.projects-swiper-container');
const myProgectsGallery = new Swiper(projectsSlider, {
    slidesPerView: 3,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 1,
    slidesPerGroup: 3,
    spaceBetween: 50,
    direction: 'horizontal',



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
        },

        577: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 36,
            slidesPerGroup: 2,
        },

        769: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },

        1025: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 34,
            slidesPerGroup: 3,
        },

        1411: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    }
});

// Карта 

ymaps.ready(init);

function init() {

    var myMap = new ymaps.Map("map", {

        center: [55.759063, 37.611243],
        zoom: 14,
        controls: [],
    });
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts-map-icon.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
};

// Маска телефона

const phoneInput = document.querySelector('input[type="tel"]');
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(phoneInput);

// Валидация


new JustValidate('.contacts-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = phoneInput.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },


    },
    messages: {
        name: {
            required: 'Недопустимый формат',
        },
        tel: {
            required: 'Недопустимый формат',
        },
    },
    colorWrong: '#D11616',
});

// Плавный скролл 

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};

// Модальное окно 

const btns = document.querySelectorAll('.gallery-swiper-slide');
const modals = document.querySelector('.gallery-modals');
const modalsItem = document.querySelectorAll('.gallery-modals__item');
const modalsClose = document.querySelector('.gallery-modals__btn-close')

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modalsItem.forEach((el) => {
            el.classList.remove('modals--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modals--visible');
        modals.classList.add('gallery-modals--visible');

        document.body.classList.add('stop-scroll');

    });
});





modals.addEventListener('click', (e) => {

    if (e.target == modals) {
        modals.classList.remove('gallery-modals--visible');
        modalsItem.forEach((el) => {
            el.classList.remove('modals--visible');
            document.body.classList.remove('stop-scroll');
        });
    }
});

modalsClose.addEventListener('click', (e) => {


    modals.classList.remove('gallery-modals--visible');
    modalsItem.forEach((el) => {
        el.classList.remove('modals--visible');
        document.body.classList.remove('stop-scroll');
    });

});