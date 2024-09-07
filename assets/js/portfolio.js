document.addEventListener("DOMContentLoaded", () => {
    // Replace with the actual ID of the image element in your HTML.
    const gif = document.getElementById("yourImageId"); // Make sure you have the correct ID
    if (!gif) {
        console.error("Image not found!");
        return;
    }

    // Optional: Add your bounce sound if you have one
    // const bounceSound = new Audio('path_to_sound_file.mp3');

    let xGif = 100;
    let yGif = 100;
    let dxGif = 0.8; // horizontal speed
    let dyGif = 0.8; // vertical speed

    function moveImage(image, x, y, dx, dy) {
        const rect = image.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Reverse direction if the image hits the edge of the viewport
        if (rect.right >= vw || rect.left <= 0) {
            dx = -dx;
            // bounceSound.play(); // Uncomment to play sound when bouncing
        }
        if (rect.bottom >= vh || rect.top <= 0) {
            dy = -dy;
            // bounceSound.play(); // Uncomment to play sound when bouncing
        }

        // Update position
        x += dx;
        y += dy;

        // Apply new position
        image.style.left = x + "px";
        image.style.top = y + "px";

        return { x, y, dx, dy };
    }

    function animate() {
        ({ x: xGif, y: yGif, dx: dxGif, dy: dyGif } = moveImage(gif, xGif, yGif, dxGif, dyGif));
        requestAnimationFrame(animate);
    }

    // Ensure the image is positioned absolutely
    gif.style.position = "absolute";
    gif.style.left = xGif + "px";
    gif.style.top = yGif + "px";
    
    // Start the animation loop
    animate();
});
