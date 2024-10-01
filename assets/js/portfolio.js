document.addEventListener("DOMContentLoaded", () => {
    const gif = document.getElementById("chi"); 
    if (!gif) {
        console.error("Image not found!");
        return;
    }

    // const bounceSound = new Audio('path_to_sound_file.mp3');

    let xGif = 100;
    let yGif = 100;
    let dxGif = 0.6; // h-speed
    let dyGif = 0.6; // v-speed

    function moveImage(image, x, y, dx, dy) {
        const rect = image.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        if (rect.right >= vw || rect.left <= 0) {
            dx = -dx;
        }
        if (rect.bottom >= vh || rect.top <= 0) {
            dy = -dy;
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
    gif.style.left = xGif + "px";
    gif.style.top = yGif + "px";
    
    animate();
});

$(document).ready(function(){
    $(".link-about").click(function(){
        $(".content-home").fadeIn(1000);
      });
  });

// Get all the icons and the progress bar element
const icons = document.querySelectorAll('.icons');
const progressBar = document.getElementById('progress-bar');

// Add event listeners to each icon for the hover effect
icons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        // Get the progress value from the data attribute
        const progressValue = this.getAttribute('data-progress');
        // Set the progress bar's value to the hovered icon's value
        progressBar.value = progressValue;
    });

    icon.addEventListener('mouseout', function() {
        // Reset the progress bar when the mouse leaves the icon
        progressBar.value = 0;
    });
});
