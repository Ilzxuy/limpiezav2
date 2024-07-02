//Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = ""); // Limpia las clases de todas las opciones
    link.className = "seleccionado";

    // Hacemos desaparecer el menu una vez que se ha seleccionado una opción
    // en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// Función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('header');
    const inicioSection = document.getElementById('inicio');
    const serviciosSection = document.getElementById('servicios'); // Obtener la sección de servicios

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function toggleBackground() {
        if (isElementInViewport(inicioSection)) {
            navbar.classList.remove('scrolled');
        } else {
            navbar.classList.add('scrolled');
        }
    }

    function setActiveLink() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('#links a');

        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('seleccionado');
            } else {
                link.classList.remove('seleccionado');
            }
        });
    }

    function navigateToSection(event) {
        event.preventDefault();
        const target = event.target;
        const href = target.getAttribute('href');

        if (href && href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        } else {
            window.location.href = href; // Navegar a la página enlace
        }
    }

    function checkPage() {
        const currentPath = window.location.pathname;
        
        // Agregar clase 'scrolled' si estamos en la página de servicios
        if (currentPath.includes('servicios.php')) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', toggleBackground);
    setActiveLink(); // Establecer el enlace activo al cargar la página
    checkPage(); // Verificar la página al cargar

    const links = document.querySelectorAll('#links a');
    links.forEach(link => {
        link.addEventListener('click', navigateToSection);
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const inicioSection = document.getElementById('inicio');
    const imagenesFondo = [
        "url('assets/img/inicio7.jpg')",
        "url('assets/img/inicio3.jpg')",
        "url('assets/img/inicio8.jpg')",
        "url('assets/img/inicio5.jpg')",
        "url('assets/img/inicio6.jpg')",
        "url('assets/img/inicio4.jpg')"
    ];
    let indexImagenActual = 0;
    const intervaloCambios = 5000; // Tiempo en milisegundos (5 segundos)

    function cambiarImagenFondo() {
        inicioSection.style.transition = 'background-image 1s ease-in-out'; // Añade transición suave
        inicioSection.style.backgroundImage = imagenesFondo[indexImagenActual];

        indexImagenActual = (indexImagenActual + 1) % imagenesFondo.length;

        setTimeout(cambiarImagenFondo, intervaloCambios);
    }

    window.onload = cambiarImagenFondo;
});


function cambiarImagenFondo() {
    var inicioSection = document.getElementById('inicio');
    inicioSection.style.backgroundImage = imagenesFondo[indexImagenActual];
    
    // Aplicar la superposición semi-transparente
    inicioSection.style.position = 'relative'; // Asegurar que el efecto de superposición funcione
    inicioSection.style.zIndex = '0'; // Asegurar que la imagen de fondo esté detrás de la superposición

    // Incrementar el índice para la siguiente imagen
    indexImagenActual = (indexImagenActual + 1) % imagenesFondo.length;

    // Llamar de nuevo la función cada intervalo de tiempo
    setTimeout(cambiarImagenFondo, intervaloCambios);
}



