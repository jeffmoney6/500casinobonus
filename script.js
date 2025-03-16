// Hitta alla element med attributet 'data-lang'
const elements = document.querySelectorAll('[data-lang]');

// Hämta användarens språk från webbläsaren
const userLanguage = navigator.language || navigator.userLanguage;

// Visa engelska versionen som standard
elements.forEach(function (element) {
    const lang = element.getAttribute('data-lang');
    if (lang === 'en') {
        element.style.display = 'block';  // Visa engelsk text
    } else {
        element.style.display = 'none';   // Dölj svensk text
    }
});

// Om användarens språk är engelska, visa engelska versionen, annars visa svensk
if (userLanguage.includes('en')) {
    elements.forEach(function (element) {
        const lang = element.getAttribute('data-lang');
        if (lang === 'en') {
            element.style.display = 'block';  // Visa engelsk text
        } else {
            element.style.display = 'none';   // Dölj svensk text
        }
    });
} 