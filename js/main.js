const reduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
).matches;

if (!reduced) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
    });
}

const yearElements = document.querySelectorAll('[data-year]');

yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
});
