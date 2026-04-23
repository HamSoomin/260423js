const button = document.querySelector("#btn");
const title = document.querySelector("#title");
const text = document.querySelector("#text");

button.addEventListener("click", function() {
    title.textContent = "クリックされました";
});

button.addEventListener("click", function() {
    title.style.color = "red";
});

button.addEventListener("click", function() {
    text.style.display = "none";
});