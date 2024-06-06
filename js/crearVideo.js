import { conexionAPI } from "./conexionAPI.js"; // Importa las funciones desde el módulo 'conexionAPI'

// Selecciona el formulario que tiene el atributo 'data-formulario'
const formulario = document.querySelector("[data-formulario]");

// Función asincrónica para crear un video
async function crearVideo(evento) {
    evento.preventDefault(); // Previene el comportamiento predeterminado del formulario (evita el envío y recarga de la página)

    // Obtiene los valores de los campos del formulario
    const titulo = document.querySelector("[data-titulo]").value; // Obtiene el valor del campo 'titulo'
    const url = document.querySelector("[data-url]").value; // Obtiene el valor del campo 'url'
    const imagen = document.querySelector("[data-imagen]").value; // Obtiene el valor del campo 'imagen'

    // Genera una descripción aleatoria (hay un error en el código original)
    const descripcion = Math.floor(Math.random() * 10).toString(); // Corrige Math.random*10 a Math.random() * 10

    try {
        // Intenta enviar el video utilizando la función 'enviarVideo' de 'conexionAPI'
        await conexionAPI.enviarVideo(titulo, descripcion, url, imagen);

        // Si el envío es exitoso, redirige a la página 'envio-concluido.html'
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        // Si ocurre un error, muestra una alerta con el mensaje de error
        alert(e);
    }
}

// Agrega un event listener para el evento 'submit' en el formulario
// Llama a la función 'crearVideo' cuando el formulario se envía
formulario.addEventListener("submit", evento => crearVideo(evento));
