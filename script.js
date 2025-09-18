document.addEventListener('DOMContentLoaded', () => {
    const pageContent = document.querySelector('.page-content');
    const footerLogo = document.querySelector('.footer-logo');

    // Animate the main content
    setTimeout(() => {
        pageContent.style.opacity = '1';
        pageContent.style.transform = 'translateY(0)';
        pageContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    }, 200);

    // Animate the footer logo after a short delay
    setTimeout(() => {
        footerLogo.style.opacity = '1';
        footerLogo.style.transform = 'translateY(0)';
        footerLogo.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    }, 500);
});
