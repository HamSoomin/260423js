const button = $("btn");
const title = $("title");
const text = $("text");

button.click(function() {
    title.text("クリックされました");
    title.css("color", "red");
    text.hide();
});