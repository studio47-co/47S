var path = location.pathname.replace(/\\/g, '/');

document.querySelectorAll('.nav-links a, .drawer-inner a').forEach(function(link) {
    var href = new URL(link.href).pathname.replace(/\\/g, '/');
    if (href === path || (path.endsWith('/') && href.endsWith('/index.html'))) {
        link.setAttribute('aria-current', 'page');
    }
});
