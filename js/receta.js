




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
                    <div class="link-cats">
                        <a href="category.html?id=${info.tags[i]}">
                            <p>Categorías: ${info.tags[i]}</p>
                        </a>
                    </div>
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

    if (buscar.value.trim() === "") {
        valida = false;
        errorForm.innerHTML = '<p>Por favor, complete el campo.</p>';
    }

    if (valida) {
        form.submit();
    }
});