




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
        for (let i = 0; i < info.tags.length; i++) {
        let categ = `
                        <a href="category.html?id=${info.tags[i]}">
                            <p>Categorías: ${info.tags[i]} <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg></p>
                        </a>
                `;
        catReceta.innerHTML += categ;
        }
    })
    .catch(function(error) {
        console.log('El error es: ' + error);
    });


let buscar = document.querySelector('#search');
let errorForm = document.querySelector('.error-form');
let form = document.querySelector('#search-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let valida = true;

    if (buscar.value== "") {
        valida = false;
        errorForm.innerHTML = '<p class="error-index">Por favor, complete el campo.</p>';
    }
    if ((buscar.value.length < 3) && (buscar.value.length != 0)){
        valida = false;
        errorForm.innerHTML = '<p class="error-index">Ingrese minimo 3 caracteres</p>';
    }
    if (valida) {
        this.submit();
    }
});