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
                        <a href="receta.html?id=${info[i].id}">
                            <img class="img-index" src="${info[i].image}"">
                            <div class="receta-text">
                                <h3>${info[i].name}</h3>
                                <p>Categorías: ${info[i].tags}</p>
                                <p>Dificultad: ${info[i].difficulty}</p>
                            </div>
                        </a>
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

let cargarMasBtn = document.querySelector('#cargar-mas');

cargarMasBtn.addEventListener('click', function() {
    cargarRecetas();
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
