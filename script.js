document.querySelectorAll('[data-lang="sv"]').forEach(el => {
    el.style.display = 'none';  // Hide Swedish
});

document.querySelectorAll('[data-lang="en"]').forEach(el => {
    el.style.display = 'block';  // Show English
});