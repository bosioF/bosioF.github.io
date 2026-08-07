(function () {
    function setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            /* localStorage unavailable (private mode, etc.) — theme just won't persist */
        }
    }

    function currentTheme() {
        return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    toggle.checked = currentTheme() === 'dark';

    toggle.addEventListener('change', function () {
        var theme = toggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        setStoredTheme(theme);
    });
})();
