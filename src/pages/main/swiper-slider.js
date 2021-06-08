// if (window.screen.width > 1200) {
//     sliderSwiper(4, 20);
// } else if (window.screen.width < 1200 && window.screen.width > 770) {
//     sliderSwiper(3, 10);
// } else if (window.screen.width <= 770 && window.screen.width > 766) {
//     sliderSwiper(2.618, 19.78);
// } else if (window.screen.width <= 766 && window.screen.width > 450) {
//     sliderSwiper(2, 10);
// } else if (window.screen.width <= 450 && window.screen.width > 376) {
//     sliderSwiper(1.5, 10);
// } else if (window.screen.width <= 376) {
//     sliderSwiper(1.33, 16);
// }


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
        // 540: {
        //     watchOverflow: false,
        //     slidesPerView: 1.33,
        //     spaceBetween: 16,
        //     loop: false
        // },
        // 460: {
        //     watchOverflow: false,
        //     slidesPerView: 1.4,
        //     spaceBetween: 16,
        //     loop: false
        // },
        // 320: {
        //     watchOverflow: false,
        //     slidesPerView: 1,
        //     spaceBetween: 0,
        //     loop: false
        // },

    }
});