

function cargarCategorias(){
    fetch('https://dummyjson.com/recipes/tags')
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(categorias) {
            console.log(categorias) 
            let lista = document.querySelector("#Campo-Categorias");
            for (let i = 0; i < categorias.length; i++) {
                let categ = `
                    <div class="receta">
                        <a href="category.html?id=${categorias[i]}">
                            <p>${categorias[i]}</p>
                        </a>
                    </div>
                `;
                lista.innerHTML += categ;
            }
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