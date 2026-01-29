AOS.init();

// Theme Toggle Logic
function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    document.body.style.backgroundColor = isDark ? "#05010a" : "#f9f5ff";
    document.body.style.color = isDark ? "white" : "#05010a";
}

// Particle Background
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = "rgba(139, 92, 246, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// Custom Cursor Movement
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Smooth delay for the blur
    cursorBlur.animate({
        left: `${e.clientX - 100}px`,
        top: `${e.clientY - 100}px`
    }, { duration: 500, fill: "forwards" });
});

// Parallax Tilt Effect for Cards
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});

function filterVault(category) {
    // Hide all categories
    document.querySelectorAll('.vault-content').forEach(vault => {
        vault.classList.add('hidden');
    });
    
    // Remove active state from all buttons
    document.querySelectorAll('.vault-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-purple-600');
    });
    
    // Show the selected category
    document.getElementById('vault-' + category).classList.remove('hidden');
    
    // Update active button style
    event.currentTarget.classList.add('active', 'bg-purple-600');
    
    // Reset AOS to catch new elements
    AOS.refresh();
}

// Function to handle 4-second video previews
function initVideoPreviews() {
    const videos = document.querySelectorAll('.preview-video');
    
    videos.forEach(video => {
        // Start playing as soon as it's ready
        video.play();

        // Reset the video to the start every 4 seconds
        setInterval(() => {
            video.currentTime = 0;
            video.play();
        }, 10000); // 4000ms = 4 seconds
    });
}

// Ensure videos start when the Media vault is opened
const originalFilterVault = filterVault;
filterVault = function(category) {
    originalFilterVault(category); // Run existing filter logic
    if(category === 'media') {
        initVideoPreviews();
    }
};

// Also run on page load for any visible videos
document.addEventListener('DOMContentLoaded', initVideoPreviews);