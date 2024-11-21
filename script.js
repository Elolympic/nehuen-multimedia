document.addEventListener('DOMContentLoaded', function() {
    // Obtener la ruta actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu-principal a');
    
    // Remover cualquier clase active existente y agregar solo a la página actual
    menuLinks.forEach(link => {
        // Obtener el href del enlace y limpiarlo
        const linkHref = link.getAttribute('href');
        
        // Comprobar si el href coincide con la página actual
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Agregar event listeners para los clics
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remover active de todos los enlaces
            menuLinks.forEach(l => l.classList.remove('active'));
            // Agregar active al enlace clickeado
            this.classList.add('active');
        });
    });
});

let currentSlide = 0; // Índice de la diapositiva actual
const slides = document.querySelectorAll('.slide'); // Selecciona todas las diapositivas
const indicators = document.querySelectorAll('.circulo'); // Selecciona todos los círculos

// Función para mostrar una diapositiva específica
function showSlide(index) {
    // Ajusta el índice si está fuera de los límites
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Oculta todas las diapositivas
    slides.forEach(slide => slide.classList.remove('active'));

    // Muestra la diapositiva actual
    slides[currentSlide].classList.add('active');

    // Actualiza los indicadores (círculos)
    updateIndicators();
}

// Función para actualizar los indicadores
function updateIndicators() {
    indicators.forEach((indicator, i) => {
        if (i === currentSlide) {
            indicator.classList.add('active'); // Marca el círculo actual
        } else {
            indicator.classList.remove('active'); // Quita la clase a los demás
        }
    });
}

// Funciones para avanzar y retroceder en el carrusel
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Redirecciones al hacer clic en una diapositiva
document.querySelector('#slide1').addEventListener('click', function () {
    window.location.href = 'https://museomoderno.org/';
});

document.querySelector('#slide2').addEventListener('click', function () {
    window.location.href = 'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/planetario-galileo-galilei';
});

document.querySelector('#slide3').addEventListener('click', function () {
    window.location.href = 'https://www.mpc.org.ar/datos_utiles/index.htm';
});

document.querySelector('#slide4').addEventListener('click', function () {
    window.location.href = 'https://www.arenacomunicacion.com/museos/';
});

// Inicializa mostrando la primera diapositiva
showSlide(0);

document.addEventListener("DOMContentLoaded", function () {
    const footerSuscripcion = document.querySelector(".footer-suscripcion");
    const footerRedes = document.querySelector(".footer-redes");
    const suscripcionFormulario = document.querySelector(".suscripcion-formulario");

    // Obtener alturas de los contenedores
    const alturaRedes = footerRedes.offsetHeight;
    const alturaSuscripcion = footerSuscripcion.offsetHeight;

    // Calcular diferencia de altura y ajustar margen superior
    if (alturaRedes > alturaSuscripcion) {
        const diferencia = alturaRedes - alturaSuscripcion;
        suscripcionFormulario.style.marginTop = `${diferencia / 2}px`;
    }
});
