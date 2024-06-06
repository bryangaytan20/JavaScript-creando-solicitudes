// Importa la función `conexionAPI` del módulo `conexionAPI.js`
import { conexionAPI } from "./conexionAPI.js";

// Selecciona el elemento HTML con el atributo `data-lista`
const lista = document.querySelector("[data-lista]")

// Función para crear una tarjeta de video (card)
// exportamos la funcion para reutilizarla en filtrarVideo
export default function crearCard(titulo, descripcion, url, imagem) {
    // Crea un nuevo elemento `li` para la tarjeta de video
    const video = document.createElement("li");
    // Asigna una clase CSS al elemento `li`
    video.className = "videos__item";
    
    // Define el contenido HTML de la tarjeta de video
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        <div class="descripcion-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>`;
    
    // Retorna el elemento `li` con la tarjeta de video
    return video;
}

// Función asincrónica para listar videos
async function listarVideos() {
    // Obtiene la lista de videos desde la API
    const listaAPI = await conexionAPI.listarVideos();
    
    // Recorre cada video de la lista y añade una tarjeta de video a la lista HTML
    listaAPI.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagem)));
}

// Llama a la función para listar los videos al cargar el script
listarVideos();

