const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const proposalPage = document.getElementById('proposal-page');
const celebrationPage = document.getElementById('celebration-page');

// 1. Moving the "No" Button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 2. Switching Pages
yesBtn.addEventListener('click', () => {
    proposalPage.classList.remove('active');
    celebrationPage.classList.add('active');
    startHeartRain();
    startCarousel();
});

// 3. Constant Heart Rain
function startHeartRain() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// 4. Cross-Fade Carousel
function startCarousel() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 4000); // Changes every 4 seconds
}