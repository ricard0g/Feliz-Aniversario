// Up animation
const imgContainers = document.querySelectorAll(".img-container");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("up", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
    });
}, {
    threshold: 1
});

imgContainers.forEach(img => {
    observer.observe(img);
});