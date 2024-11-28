


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let cat = queryStringObj.get("id");
let titulo = document.querySelector('#categoria-h1')
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
            titulo.innerText += `Categoria: ${cat}`;
            for (let i = 0; i < categorias.recipes.length; i++) {
                let categ = `
                    <div class="receta">
                        <a href="receta.html?id=${categorias.recipes[i].id}" >
                            <img class="img-index" src="${categorias.recipes[i].image} "class="imgReceta">
                            <div class="receta-text"> 
                            <h3>${categorias.recipes[i].name}</h3>
                            <p>Categorías: ${categorias.recipes[i].tags}</p>
                            <p>Dificultad: ${categorias.recipes[i].difficulty}</p> 
                            </div>
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