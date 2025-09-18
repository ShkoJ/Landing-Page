document.addEventListener('DOMContentLoaded', () => {
    const headerLogo = document.querySelector('.header-logo');
    const pageContent = document.querySelector('.page-content');

    // Animate the header logo first
    setTimeout(() => {
        headerLogo.style.opacity = '1';
        headerLogo.style.transform = 'translateY(0)';
        headerLogo.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    }, 200);

    // Animate the main content after the header
    setTimeout(() => {
        pageContent.style.opacity = '1';
        pageContent.style.transform = 'translateY(0)';
        pageContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    }, 500);
});
