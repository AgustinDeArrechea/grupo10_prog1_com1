

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