document.addEventListener("DOMContentLoaded", () => {
    const gif = document.getElementById("chi");

    let xGif = 100;
    let yGif = 100;
    let dxGif = 0.6;
    let dyGif = 0.6;

    function moveImage(image, x, y, dx, dy) {
        const rect = image.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        if (rect.right >= vw || rect.left <= 0) dx = -dx;
        if (rect.bottom >= vh || rect.top <= 0) dy = -dy;

        x += dx;
        y += dy;

        image.style.left = x + "px";
        image.style.top = y + "px";

        return { x, y, dx, dy };
    }

    function animate() {
        ({ x: xGif, y: yGif, dx: dxGif, dy: dyGif } = moveImage(gif, xGif, yGif, dxGif, dyGif));
        requestAnimationFrame(animate);
    }

    gif.style.position = "absolute";
    gif.style.left = xGif + "px";
    gif.style.top = yGif + "px";
    animate();
});

const icons = document.querySelectorAll('.icons');
const progressBar = document.getElementById('progress-bar');

icons.forEach(icon => {
    icon.addEventListener('mouseover', function () {
        const progressValue = this.getAttribute('data-progress');
        progressBar.value = progressValue;
    });

    icon.addEventListener('mouseout', function () {
        progressBar.value = 0;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Set data-1 as active on page load
    document.getElementById("data-1").classList.add("active");
});

function hideAllData() {
    const dataElements = document.querySelectorAll('#data-1, #data-2, #data-3, #data-4');
    dataElements.forEach(element => {
        element.classList.remove('active');
    });
}

function dataHome() {
    hideAllData();
    document.getElementById("data-1").classList.add("active");
}

function dataAbout() {
    hideAllData();
    document.getElementById("data-2").classList.add("active");
}

function dataSkills() {
    hideAllData();
    document.getElementById("data-3").classList.add("active");
}

function dataContact() {
    hideAllData();
    document.getElementById("data-4").classList.add("active");
}
