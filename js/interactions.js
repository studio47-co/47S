document.querySelectorAll('[data-copy]').forEach((element) => {
    element.addEventListener('click', () => {
        navigator.clipboard?.writeText(element.dataset.copy);
    });
});
