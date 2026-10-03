const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
).matches;

if (!prefersReducedMotion) {
    document.querySelectorAll('.magnet').forEach((element) => {
        element.addEventListener('pointermove', (event) => {
            const rect = element.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
            const y = (event.clientY - rect.top - rect.height / 2) * 0.08;

            element.style.transform = `translate(${x}px, ${y}px)`;
        });

        element.addEventListener('pointerleave', () => {
            element.style.transform = '';
        });
    });
}
