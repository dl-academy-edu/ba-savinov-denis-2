const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.control__btn_next',
        prevEl: '.control__btn_prev',
    }

});