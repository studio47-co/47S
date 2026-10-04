const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.catalog-item');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        filters.forEach((item) => item.classList.remove('active'));
        filter.classList.add('active');

        const type = filter.dataset.filter;

        items.forEach((item) => {
            item.hidden =
                type !== 'all' && !item.dataset.tags.split(' ').includes(type);
        });
    });
});
