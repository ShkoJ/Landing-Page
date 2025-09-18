document.addEventListener('DOMContentLoaded', () => {
    const headerLogo = document.querySelector('.header-logo');
    const pageContent = document.querySelector('.page-content');
    const footerLogo = document.querySelector('.footer-logo');
    const listItems = document.querySelectorAll('.bullet-list-check li');

    // Animate the header logo first
    setTimeout(() => {
        headerLogo.style.opacity = '1';
        headerLogo.style.transform = 'translateY(0)';
    }, 200);

    // Animate the main content after the header
    setTimeout(() => {
        pageContent.style.opacity = '1';
        pageContent.style.transform = 'translateY(0)';
    }, 500);

    // Animate the footer logo
    setTimeout(() => {
        footerLogo.style.opacity = '1';
        footerLogo.style.transform = 'translateY(0)';
    }, 800);
    
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the animation on scroll
    function handleScrollAnimation() {
        listItems.forEach(item => {
            if (isElementInViewport(item) && !item.classList.contains('visible')) {
                item.classList.add('visible');
            }
        });
    }

    // Run the function once on page load to check for elements already in view
    handleScrollAnimation();
    
    // Listen for scroll and resize events
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);
});
