let slides = document.querySelectorAll(".slide");
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', () => {
        clearActivClasses();
        slides[i].classList.add('active');
    });
}

function clearActivClasses() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
}