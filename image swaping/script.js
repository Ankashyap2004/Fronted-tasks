// Select button and images
const button = document.querySelector('button');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

// Event listener for button click
button.addEventListener('click', () => {
    // Get current image sources
    const img1src = img1.getAttribute('src');
    const img2src = img2.getAttribute('src');

    console.log("Before Swap - Image 1 Source:", img1src);
    console.log("Before Swap - Image 2 Source:", img2src);

    // Swap the image sources
    img1.setAttribute('src', img2src);
    img2.setAttribute('src', img1src);

    console.log("After Swap - Image 1 Source:", img1.getAttribute('src'));
    console.log("After Swap - Image 2 Source:", img2.getAttribute('src'));
});
