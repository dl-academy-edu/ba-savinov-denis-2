if (window.screen.width > 1200) {
    sliderSwiper(4, 20);
} else if (window.screen.width < 1200 && window.screen.width > 770) {
    sliderSwiper(3, 10);
} else if (window.screen.width <= 770 && window.screen.width > 766) {
    sliderSwiper(2.618, 19.78);
} else if (window.screen.width <= 766 && window.screen.width > 450) {
    sliderSwiper(2, 10);
} else if (window.screen.width <= 450 && window.screen.width > 376) {
    sliderSwiper(1.5, 10);
} else if (window.screen.width <= 376) {
    sliderSwiper(1.5, 16);
}

console.log(window.screen.width);

document.addEventListener("DOMContentLoaded", function(event) {
    window.onresize = function() {
        if (window.outerWidth > 1200) {
            sliderSwiper(4, 20);
        }
        if (window.outerWidth < 1200) {
            sliderSwiper(3, 20);
        }
        if (window.outerWidth <= 770) {
            sliderSwiper(2.618, 19.78);
        }
        if (window.outerWidth <= 766) {
            sliderSwiper(2, 10);
        }
        if (window.outerWidth <= 450) {
            sliderSwiper(1.5, 10);
        }
    };
});

function sliderSwiper(slider, spaceBetween) {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: slider,
        spaceBetween: spaceBetween,
        loop: true,

        navigation: {
            nextEl: '.control__btn_next',
            prevEl: '.control__btn_prev',
        }

    });
}