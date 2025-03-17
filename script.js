const elements = document.querySelectorAll('[data-lang]');

elements.forEach(function (element) {
    const lang = element.getAttribute('data-lang');
    if (lang === 'en') {
        element.style.display = 'block';  // Visa engelsk text
    } else {
        element.style.display = 'none';   // Dölj annan text
    }
});