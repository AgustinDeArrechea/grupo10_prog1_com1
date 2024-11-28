

function validarForm(){
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
}


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let rec = queryStringObj.get("search");
function cargarCategorias(){
    fetch(`https://dummyjson.com/recipes/search?q=${rec}`)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(recetas) {
            
            let lista = document.querySelector("#resultados");
            for (let i = 0; i < recetas.recipes.length; i++) {
                let rece = `
                    <div class="receta">
                        <a href="receta.html?id=${recetas.recipes[i].id}">
                            <img src="${recetas.recipes[i].image}" alt="${recetas.recipes[i].name}">
                            <h3>${recetas.recipes[i].name}</h3>
                            <p>Categorías: ${recetas.recipes[i].tags}</p>
                            <p>Dificultad: ${recetas.recipes[i].difficulty}</p> 
                        </a>
                    </div>
                `;
                lista.innerHTML += rece;
            }
        })
        .catch(function(error){
            console.log("El error es: " + error);

        }
        );

    

}
cargarCategorias();
validarForm();