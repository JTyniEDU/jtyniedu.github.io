var body = document.querySelector("body");

function changetheme() {
    if (body.className !== "dark") {
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
    }
};

