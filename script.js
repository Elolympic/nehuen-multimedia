let currentSlide = 1; // Variable que guarda la diapositiva actual
showSlide(currentSlide); // Selecciona todas las diapositivas

function showSlide(n) { // Función para mostrar una diapositiva específica
    const slides = document.querySelectorAll('.slide'); // Selecciona todas las diapositivas
    const circles = document.querySelectorAll('.circulo'); // Selecciona todos los indicadores (círculos)

    if (n > slides.length) { // Si n es mayor que el número de diapositivas
        currentSlide = 1; // Regresa a la primera diapositiva
    }
    if (n < 1) { // Si n es menor que 1
        currentSlide = slides.length; // Va a la última diapositiva
    }

    slides.forEach((slide) => {
        slide.style.display = 'none'; // Ocultar todas las diapositivas
    });
    circles.forEach((circle) => {
        circle.style.backgroundColor = '#fff'; // Resetea el color de los círculos
    });

    slides[currentSlide - 1].style.display = 'block'; // Muestra la diapositiva actual
    circles[currentSlide - 1].style.backgroundColor = '#2A1E5C'; // Cambia el color del círculo activo
}

function nextSlide() {
    showSlide(currentSlide += 1); // Aumenta currentSlide en 1 y muestra la siguiente diapositiva
}

function prevSlide() {
    showSlide(currentSlide -= 1); // Disminuye currentSlide en 1 y muestra la diapositiva anterior
}

document.querySelector('#slide1').addEventListener('click', function() {
    window.location.href = 'https://museomoderno.org/';
  });

  document.querySelector('#slide2').addEventListener('click', function() {
    window.location.href = 'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/planetario-galileo-galilei';
  });

  document.querySelector('#slide3').addEventListener('click', function() {
    window.location.href = 'https://www.mpc.org.ar/datos_utiles/index.htm';
  });

  document.querySelector('#slide4').addEventListener('click', function() {
    window.location.href = 'https://www.arenacomunicacion.com/museos/';
  });
