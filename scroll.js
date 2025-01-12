// Get the navbar element
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const nameText = document.querySelector('.name-text');

// Listen for the scroll event
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // Current scroll position

    // When the scroll position is greater than the height of the name text element
    if (scrollPosition > nameText.offsetHeight) {
        navbar.classList.add('fixed'); // Add 'fixed' class to make navbar fixed at the top
    } else {
        navbar.classList.remove('fixed'); // Remove 'fixed' class to return navbar to normal flow
    }
});
