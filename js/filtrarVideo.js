import { conexionAPI } from "./conexionAPI.js"; // Importa las funciones desde el módulo 'conexionAPI'
import crearCard from "./mostrarVideos.js"; // Importa la función 'crearCard' desde el módulo 'mostrarVideos.js'

// Función asincrónica para filtrar videos basada en el término de búsqueda
async function filtrarVideo(evento) {
    evento.preventDefault(); // Previene el comportamiento predeterminado del evento

    // Obtiene el valor del campo de búsqueda
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    
    // Llama a la función 'buscarVideos' de la API para obtener los videos que coinciden con el término de búsqueda
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    // Selecciona el elemento del DOM donde se mostrarán los resultados de la búsqueda
    const lista = document.querySelector("[data-lista]");

    // Elimina todos los hijos del elemento 'lista' (limpia la lista de resultados anteriores)
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Recorre cada video en los resultados de la búsqueda y agrega una tarjeta de video a la lista
    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagem)));

    // Si no se encontraron videos, muestra un mensaje en la lista
    if (busqueda.length == 0) {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h2>`;
    }
}

// Selecciona el elemento de entrada con el id 'buscar'
const inputEle = document.getElementById('buscar');

// Agrega un event listener para el evento 'keyup' en el elemento de entrada
inputEle.addEventListener('keyup', function(e) {
    // Obtiene el código de la tecla presionada usando 'key' (para navegadores modernos)
    // y 'keyCode' (para compatibilidad con navegadores antiguos)
    var key = e.key || e.keyCode;

    // Si la tecla presionada es Enter (identificada por 'Enter' o el código 13)
    if (key === 'Enter' || key === 13) {
        filtrarVideo(e); // Llama a la función 'filtrarVideo' pasando el evento 'e'
    }
});

// Selecciona el botón de búsqueda utilizando el atributo 'data-boton-busqueda'
const boton = document.querySelector("[data-boton-busqueda]");

// Agrega un event listener para el evento 'click' en el botón de búsqueda
boton.addEventListener("click", evento => filtrarVideo(evento)); // Llama a la función 'filtrarVideo' cuando se hace clic en el botón
