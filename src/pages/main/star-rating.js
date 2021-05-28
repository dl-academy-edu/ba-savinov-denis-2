let starRating = document.querySelectorAll(".star-rating__label");

//star rating accessibility

starRating.forEach((starRating) => starRating.addEventListener(`focus`, (event) => {
    event.target.addEventListener('keydown', (ev) => {
        if (ev.code === "Space") {
            event.target.click();
        }
    });
}));