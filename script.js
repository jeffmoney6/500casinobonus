// Hitta alla element med attributet 'data-lang'
const elements = document.querySelectorAll('[data-lang]');

// Hämta användarens språk från webbläsaren
const userLanguage = navigator.language || navigator.userLanguage;

// Om användarens språk är engelska (en), visa engelska versionen av innehållet
if (userLanguage.includes('en')) {
    elements.forEach(function (element) {
        const lang = element.getAttribute('data-lang');
        if (lang === 'en') {
            element.style.display = 'block';  // Visa engelsk text
        } else {
            element.style.display = 'none';   // Dölj svensk text
        }
    });
} else {
    // Om användarens språk inte är engelska, visa den svenska versionen av innehållet
    elements.forEach(function (element) {
        const lang = element.getAttribute('data-lang');
        if (lang === 'sv') {
            element.style.display = 'block';  // Visa svensk text
        } else {
            element.style.display = 'none';   // Dölj engelsk text
        }
    });
}