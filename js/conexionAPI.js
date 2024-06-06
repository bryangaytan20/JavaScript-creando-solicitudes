// conexionAPI

// Función asincrónica para listar videos
async function listarVideos() {
    // Realiza una solicitud GET a la URL especificada para obtener la lista de videos
    const conexion = await fetch("http://localhost:3001/videos");

    // Convierte la respuesta de la solicitud en un objeto JSON
    const conexionConvertida = await conexion.json();

    // (Descomentado) Muestra la respuesta convertida en la consola para depuración
    // console.log(conexionConvertida);

    // Retorna la respuesta convertida
    return conexionConvertida;
}

// Función asincrónica para enviar un nuevo video
async function enviarVideo(titulo, descripcion, url, imagem) {
    // Realiza una solicitud POST a la URL especificada para crear un nuevo video
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST", // Método HTTP utilizado para la solicitud
        headers: { "Content-type": "application/json" }, // Especifica que el cuerpo de la solicitud es JSON
        body: JSON.stringify({
            titulo: titulo, // Título del video
            descripcion: `${descripcion} mil visualizaciones`, // Descripción del video
            url: url, // URL del video
            imagem: imagem // URL de la imagen del video
        })
    });

    // Convierte la respuesta de la solicitud en un objeto JSON
    const conexionConvertida = await conexion.json();

    // Retorna la respuesta convertida
    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;

}

// Exporta un objeto 'conexionAPI' con las funciones 'listarVideos' y 'enviarVideo'
export const conexionAPI = {
    listarVideos,
    enviarVideo,
    buscarVideos
};


// listarVideos();