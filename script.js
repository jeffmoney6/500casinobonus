const elements = document.querySelectorAll('[data-lang]');

// Alltid visa engelska versionen
elements.forEach(el => {
    if (el.getAttribute('data-lang') === 'en') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
});