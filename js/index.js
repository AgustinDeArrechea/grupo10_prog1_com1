function cargarRecetas() {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=0`)
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
                            <img src="${info[i].image}"">
                            <h3>${info[i].name}</h3>
                            <p>Categorías: ${info[i].tags}</p>
                            <p>Dificultad: ${info[i].difficulty}</p>
                        </a>
                    </div>
                `;
                lista.innerHTML += receta;
            }
        })
        .catch(function(error) {
            console.log('El error es: ' + error);
        });
}

cargarRecetas();

let cargarMasBtn = document.querySelector('#cargar-mas');

cargarMasBtn.addEventListener('click', function() {
    cargarRecetas();
});
