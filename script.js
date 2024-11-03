const wireframes = document.querySelectorAll('.wireframe');
let currentIndex = 0;

function rotateImages() {
    // Oculta la imagen actual
    wireframes[currentIndex].classList.remove('active');
    
    // Incrementa el índice para mostrar la siguiente imagen
    currentIndex = (currentIndex + 1) % wireframes.length;
    
    // Muestra la nueva imagen
    wireframes[currentIndex].classList.add('active');
}

// Inicia la rotación de imágenes cada 3 segundos
setInterval(rotateImages, 2500);
