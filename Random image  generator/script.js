var card = document.querySelector('.card');
var btn = document.querySelector('.btn');
const imageArray = ['https://plus.unsplash.com/premium_vector-1704897620570-2faf30cffc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG92ZSUyMHN0b3J5fGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_vector-1704897620212-056d92b5a501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG92ZSUyMHN0b3J5fGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_vector-1730022412361-dc0b7febe6bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxvdmUlMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1727455293242-11dddc8118f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxvdmUlMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1725246131546-3a4488e5e388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RmtXWEc1VFIyMDR8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1684779847503-001f1584bc00?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1694279873945-b4a4247e4358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fEZrV1hHNVRSMjA0fHxlbnwwfHx8fHw%3D'
];
btn.addEventListener("click",() => {
    const randomIndex = Math.floor(Math.random() *imageArray.length);
    const randomImage = imageArray[randomIndex];
    card.style.backgroundImage = `url('${randomImage}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
});