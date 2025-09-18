document.addEventListener('DOMContentLoaded', () => {
    const headerLogo = document.querySelector('.header-logo');
    const pageContent = document.querySelector('.page-content');
    const footerLogo = document.querySelector('.footer-logo');

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

    // Animate the footer logo
    setTimeout(() => {
        footerLogo.style.opacity = '1';
        footerLogo.style.transform = 'translateY(0)';
        footerLogo.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    }, 800);

    // Add hidden class to list items on page load
    document.querySelectorAll('.bullet-list-check li').forEach(item => {
        item.classList.add('hidden');
    });

    // Listen for scroll and resize events
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);

    // Run the function once on page load to check for elements already in view
    handleScrollAnimation();
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
    const listItems = document.querySelectorAll('.bullet-list-check li');
    listItems.forEach(item => {
        if (isElementInViewport(item) && item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        }
    });
}
