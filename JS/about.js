document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const skillPercentage = bar.getAttribute('data-skill');
        const innerBar = bar.querySelector('.inner-progress-bar');
        innerBar.style.width = `${skillPercentage}%`; // Dynamically set the width of the inner bar
    });
});
