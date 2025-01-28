// Main Menu Toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optionally preload assets like images/fonts for better performance
document.fonts.load('600 16px Poppins').then(() => {
    console.log('Font loaded successfully');
});
