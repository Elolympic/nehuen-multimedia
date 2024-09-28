let currentSlide = 1;
showSlide(currentSlide);

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const circles = document.querySelectorAll('.circulo');

    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none'; // Ocultar todas las diapositivas
    });
    circles.forEach((circle) => {
        circle.style.backgroundColor = '#fff'; // Resetear color de los círculos
    });

    slides[currentSlide - 1].style.display = 'block'; // Mostrar la diapositiva actual
    circles[currentSlide - 1].style.backgroundColor = '#2A1E5C'; // Cambiar el color del círculo activo
}

function nextSlide() {
    showSlide(currentSlide += 1);
}

function prevSlide() {
    showSlide(currentSlide -= 1);
}
