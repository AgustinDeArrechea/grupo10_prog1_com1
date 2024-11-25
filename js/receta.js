




let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let tituloReceta = document.querySelector('#receta-titulo');
let imagenReceta = document.querySelector('#receta-imagen');
let tiempoReceta = document.querySelector('#receta-tiempo');
let instrReceta = document.querySelector('#receta-instrucciones');
let catReceta = document.querySelector('#receta-categorias');



fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(info) {
        tituloReceta.innerText = info.name;
        imagenReceta.src = info.image;
        instrReceta.innerText = info.instructions
        tiempoReceta.innerText = `Tiempo de cocción: ${info.cookTimeMinutes} minutos`;
        catReceta.innerText = info.tags
    })
    .catch(function(error) {
        console.log('El error es: ' + error);
    });