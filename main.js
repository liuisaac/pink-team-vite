// Create falling glitter
function createGlitter() {
    const glitters = ['✨', '💖', '⭐', '🌟', '💚', '💛'];
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.textContent = glitters[Math.floor(Math.random() * glitters.length)];
    glitter.style.left = Math.random() * 100 + 'vw';
    glitter.style.animationDuration = (Math.random() * 2 + 2) + 's';
    glitter.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(glitter);
    
    setTimeout(() => glitter.remove(), 5000);
}

setInterval(createGlitter, 300);