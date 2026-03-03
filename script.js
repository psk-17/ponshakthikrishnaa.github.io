// Smooth fade-in effect
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.transition = "opacity 1s ease-in";
            section.style.opacity = 1;
        }, 200);
    });
});
