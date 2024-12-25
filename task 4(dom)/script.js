var btn = document.querySelector("button");
var body = document.querySelector("body");
var images = [
    'https://www.freepnglogos.com/uploads/bug-png/bug-png-transparent-images-4.png',
    'https://pngimg.com/d/roach_PNG12145.png',
    'https://static.vecteezy.com/system/resources/thumbnails/038/451/350/small/ai-generated-bloodsucker-mosquito-isolated-on-transparent-background-file-png.png',
    'https://static.vecteezy.com/system/resources/thumbnails/024/589/182/small/bee-side-view-with-ai-generated-free-png.png'
];

btn.addEventListener("click", function() {
    var valueX = Math.random() * 96; // Random horizontal position
    var valueY = Math.random() * 90; // Random vertical position
    var rotate = Math.random() * 360; // Random rotation

    var img = document.createElement('img'); // Create image element
    var randomIndex = Math.floor(Math.random() * images.length); // Pick random image
    img.setAttribute('src', images[randomIndex]); // Set image source

    // Apply styles
    img.style.height = '100px';
    img.style.position = 'absolute';
    img.style.left = valueX + '%';
    img.style.top = valueY + '%';
    img.style.transform = `rotate(${rotate}deg)`; // Correct rotation syntax

    // Append image to body
    body.appendChild(img);
});
