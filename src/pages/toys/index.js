let input = document.querySelector(".cost__range");
actualizarInput(input);

document.addEventListener("input", function(evt) {
    actualizarInput(input);
});

function actualizarInput(input) {
    var inputVal = input.value;
    input.style.setProperty("--value", (inputVal - 0) / 5);
}