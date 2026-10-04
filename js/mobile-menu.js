(function () {
    var toggle = document.querySelector('.menu-toggle');
    var drawer = document.querySelector('.nav-drawer');

    if (!toggle || !drawer) return;

    function open() {
        drawer.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', onOutside);
        document.addEventListener('keydown', onKey);
    }

    function close() {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', onOutside);
        document.removeEventListener('keydown', onKey);
    }

    function onOutside(e) {
        if (!drawer.contains(e.target) && !toggle.contains(e.target)) close();
    }

    function onKey(e) {
        if (e.key === 'Escape') { close(); toggle.focus(); }
    }

    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        drawer.classList.contains('open') ? close() : open();
    });

    drawer.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', close);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) close();
    });
}());
