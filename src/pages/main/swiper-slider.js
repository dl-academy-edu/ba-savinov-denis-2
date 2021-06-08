const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    cssMode: false,

    navigation: {
        nextEl: '.control__btn_next',
        prevEl: '.control__btn_prev',
    },

    breakpoints: {
        250: {
            watchOverflow: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false
        },
        350: {
            watchOverflow: false,
            slidesPerView: 1.4,
            spaceBetween: 16,
            loop: false
        },
        460: {
            watchOverflow: false,
            slidesPerView: 1.4,
            spaceBetween: 16,
            loop: false
        },
        540: {
            watchOverflow: false,
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false
        },

        760: {
            slidesPerView: 2.6,
            spaceBetween: 10,
            loop: true
        },

        770: {
            slidesPerView: 2.618,
            spaceBetween: 19.78,
            loop: true
        },

        1200: {
            width: 1180,
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true
        }
    }
});