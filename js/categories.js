
let campoCategorias = document.querySelector('#Campo-Categorias');

function cargarCategorias(){
    fetch('https://dummyjson.com/recipes/tags')
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(categorias) {
            console.log(categorias) 
        })
        .catch(function(error){
            console.log("El error es: " + error);

        }
        );

    

}
cargarCategorias();