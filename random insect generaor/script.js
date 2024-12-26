var btn = document.querySelector('.btn');
const insectsImages = [
    'https://pestie.com/pest-illustrations/700-F0F4FF/red-flour-beetle.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjPVkGlmzHkFfEXUNSSi6JM00D6Iki4lS7w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR_kQFjP88kCyWMEr4luohDS34HgdWO7zfA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjfOoJ-wWfdz3jIfhRkEiQP_2Ctdq82ItAcQ&s',
];

function getRandomInsects() {
    const randomIndex = Math.floor(Math.random() * insectsImages.length);
    return insectsImages[randomIndex];
}
btn.addEventListener('click', () => {
    const insect = document.createElement('img');
    insect.src = getRandomInsects();
    insect.style.position= 'absolute';
    insect.style.top = `${Math.random() *90}vh`;
    insect.style.left = `${Math.random() *90}vw`;
    insect.style.width = `${Math.random() *100 + 50}px`;
    insect.style.pointerEvents = 'none';
    insect.style.zIndex = '0';
    document.body.appendChild(insect);

});