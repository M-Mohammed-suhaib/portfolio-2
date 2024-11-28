// Intersection Observer to trigger animation on scroll
const projectNodes = document.querySelectorAll('.node');

const observerOptions = {
    root: null, // Using the viewport as the root
    threshold: 0.3, // Trigger animation when 30% of the node is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible'); // Add the class to trigger animation
            observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
    });
}, observerOptions);

// Observe each project node for scrolling visibility
projectNodes.forEach(node => {
    observer.observe(node);
});
