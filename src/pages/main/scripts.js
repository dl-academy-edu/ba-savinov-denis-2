let modalOpenBtn = document.querySelector(".about-us__btn"),
    popupOverlay = document.querySelector(".modal-overlay"),
    modalWindow = document.querySelector(".modal-window"),
    modalCloseBtn = document.querySelector(".popup-close"),
    modalInput = modalWindow.querySelector("#contact-name"),
    sliderToggleBtn = document.querySelectorAll(".slider__toggle-btn"),
    sliderCounter = document.querySelector(".slider__counter");



// Modal window open

modalOpenBtn.addEventListener('click', () => {
    popupOverlay.classList.add('popup-visible');
    modalWindow.classList.add('popup-visible');
    modalInput.focus();
})

// Modal window close

modalCloseBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('popup-visible');
    modalWindow.classList.remove('popup-visible');
})

window.addEventListener('keydown', (event) => {


    if (event.key === 'Escape') {
        popupOverlay.classList.remove('popup-visible');
        modalWindow.classList.remove('popup-visible');
    }

})

// slider control

sliderToggleBtn.forEach((itemBtn) => itemBtn.addEventListener(`click`, (event) => {
    sliderCounter.textContent = event.target.dataset.slidenumber;
    removeClassActiveBtn(sliderToggleBtn);
    event.target.classList.add('slider__toggle-btn_active');
}));

function removeClassActiveBtn(arr) {
    arr.forEach((item) => {
        item.classList.remove('slider__toggle-btn_active');
    })
}