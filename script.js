// Hitta alla element med attributet 'data-lang'
const elements = document.querySelectorAll('[data-lang]');

// Visa den engelska versionen av innehållet
elements.forEach(function (element) {
    const lang = element.getAttribute('data-lang');
    if (lang === 'en') {
        element.style.display = 'block';  // Visa engelsk text
    } else {
        element.style.display = 'none';   // Dölj all annan text
    }
});