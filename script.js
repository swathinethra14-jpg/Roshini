const noBtn = document.getElementById('noButton');
const yesBtn = document.getElementById('yesButton');
const proposalPage = document.getElementById('proposal-page');
const celebrationPage = document.getElementById('celebration-page');

// 1. Moving the "No" Button (Fixed ID)
noBtn.addEventListener('mouseover', () => {
    // We use window dimensions so it can fly anywhere on the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Switching Pages (Fixed ID)
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
        heart.style.zIndex = "1000"; // Ensure it's on top
        document.body.appendChild(heart);
        
        // Clean up memory
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// 4. Cross-Fade Carousel
function startCarousel() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    
    // Safety check: only run if slides exist
    if (slides.length === 0) return;

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 4000); 
}
