document.addEventListener("DOMContentLoaded", () => {
    const gif = document.getElementById("chi"); 
    if (!gif) {
        console.error("Image not found!");
        return;
    }

    // const bounceSound = new Audio('path_to_sound_file.mp3');

    let xGif = 100;
    let yGif = 100;
    let dxGif = 1-4; // h-speed
    let dyGif = 1.4; // v-speed

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
        $("p").hide(1000);
      });
  });


