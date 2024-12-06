//Cargar Recetas
let skip = 0

function cargarRecetas() {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(informacion) {
            let info = informacion.recipes;
            console.log(info);
            let lista = document.querySelector("#campo-recetas");
            for (let i = 0; i < info.length; i++) {
                let receta = `
                    <div class="receta">                
                        <img class="img-index" src="${info[i].image}"">
                        <div class="receta-text">
                            <h3>${info[i].name}</h3>
                            <p>Categorías: ${info[i].tags}</p>
                            <p>Dificultad: ${info[i].difficulty}</p>
                            <a class="a-detalles" href="receta.html?id=${info[i].id}">
                                <p class="ver-detalles">Ver detalles</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg>
                            </a>
                        </div>
                    </div>
                `;
                lista.innerHTML += receta;
            }
        })
        .catch(function(error) {
            console.log('El error es: ' + error);
        });
    skip += 10
}

cargarRecetas();
// cargar mas boton
let cargarMasBtn = document.querySelector('#cargar-mas');

cargarMasBtn.addEventListener('click', function() {
    cargarRecetas();
});
// Seacrh JS 
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
