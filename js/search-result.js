

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
let busqueda = document.querySelector('.h1-search');

function cargarCategorias(){
    fetch(`https://dummyjson.com/recipes/search?q=${rec}`)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(recetas) {
            console.log(recetas)
            if (recetas.recipes == 0){
                busqueda.innerText += `No se encontraron resultados`
            }
            else{

            
            busqueda.innerText += `Resultados de busqueda para: "${rec}"`
            let lista = document.querySelector("#resultados");
            for (let i = 0; i < recetas.recipes.length; i++) {
                let rece = `
                    <div class="receta">
                        <img class="img-index" src="${recetas.recipes[i].image}" alt="${recetas.recipes[i].name}">
                        <div class="receta-text"> 
                            <h3>${recetas.recipes[i].name}</h3>
                            <p>Categorías: ${recetas.recipes[i].tags}</p>
                            <p>Dificultad: ${recetas.recipes[i].difficulty}</p> 
                            <a href="receta.html?id=${recetas.recipes[i].id}" class="a-detalles" >
                                <p class="ver-detalles">Ver detalles</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg>
                            </a>
                        </div>
                    </div>
                `;
                lista.innerHTML += rece;
            }
            }
        })
        .catch(function(error){
            console.log("El error es: " + error);

        }
        );

    

}
cargarCategorias();
validarForm();