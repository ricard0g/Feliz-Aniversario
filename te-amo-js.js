// Up animation
const paragraphs = document.querySelectorAll(".p");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("up", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
    });
}, {
    threshold: 1
});

paragraphs.forEach(paragraph => {
    observer.observe(paragraph);
})