// Fade-in on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));
// ====== Skills Section: Expand / Collapse Categories ======
document.querySelectorAll(".skill-category-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const grid = button.nextElementSibling;
    grid.classList.toggle("hidden");
    button.classList.toggle("active");
  });
});