


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let cat = queryStringObj.get("id");

function cargarCategorias(){
    fetch(`https://dummyjson.com/recipes/tag/${cat}`)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(categorias) {
            console.log(categorias) 
            console.log(categorias.recipes[0].name) 
            console.log(cat)
            let lista = document.querySelector("#categoria-div");
            for (let i = 0; i < categorias.recipes.length; i++) {
                let categ = `
                    <div class="receta">
                        <a href="receta.html?id=${categorias.recipes[i].id}" >
                            <img src="${categorias.recipes[i].image} "class="imgReceta">
                            <h3>${categorias.recipes[i].name}</h3>
                            <p>Categorías: ${categorias.recipes[i].tags}</p>
                            <p>Dificultad: ${categorias.recipes[i].difficulty}</p> 
                        </a>
                    </div>
                `;
                lista.innerHTML += categ;
            }
            console.log(lista)
        })
        .catch(function(error){
            console.log("El error es: " + error);

        }
        );

    

}
cargarCategorias();


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