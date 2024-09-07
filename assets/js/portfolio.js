document.addEventListener("DOMContentLoaded", () => {
    const gif = document.getElementById("/favicon.ico");
    const bounceSound = 0;

    let xGif = 100;
    let yGif = 100;
    let dxGif = 0.8; // horizontal
    let dyGif = 0.8; // vertical

    function moveImage(image, x, y, dx, dy) {
        const rect = image.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        if (rect.right >= vw || rect.left <= 0) {
            dx = -dx;
            // bounceSound.play();
        }
        if (rect.bottom >= vh || rect.top <= 0) {
            dy = -dy;
            // bounceSound.play();
        }

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
    animate();
});
