let modalCloseBtn = document.querySelector(".modal-window__btn_cross"),
    modalOpenBtn = document.querySelector(".about-us__btn"),
    sliderToggleBtn = document.querySelectorAll(".slider__toggle-btn"),
    sliderCounter = document.querySelector(".slider__counter"),
    modalWindow = document.querySelector(".modal-window"),
    modalInput = modalWindow.querySelector("#contact-name"),
    overlay = document.querySelector(".modal-overlay");


    
// Modal window open

modalOpenBtn.addEventListener('click', () => {
    overlay.classList.add('popup-visible');
    modalWindow.classList.add('popup-visible');
    modalInput.focus();
})

// // // Modal window close

modalCloseBtn.addEventListener('click', () => {
    overlay.classList.remove('popup-visible');
    modalWindow.classList.remove('popup-visible');
})

window.addEventListener('keydown', (event) => {


    if (event.key === 'Escape') {
        overlay.classList.remove('popup-visible');
        modalWindow.classList.remove('popup-visible');
    }

})

// // slider control

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