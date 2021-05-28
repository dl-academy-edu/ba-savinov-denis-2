let checkboxAgrement = document.querySelector("#agreement"),
    modalSubmitBtn = document.querySelector("#contact-button");

// Window unlock submit button
modalSubmitBtn.disabled = true;
checkboxAgrement.addEventListener('change', () => {

    if (checkboxAgrement.checked) {
        modalSubmitBtn.disabled = false;
    } else {
        modalSubmitBtn.disabled = true;
    }
})