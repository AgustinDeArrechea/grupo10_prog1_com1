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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#search-form');

    // Verifica que el formulario exista en la página
    if (form) {
        const buscar = form.querySelector('#search');
        const errorForm = form.querySelector('.error-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío por defecto
            let valida = true;
            errorForm.innerHTML = ''; // Limpiar mensajes de error previos

            // Validar el campo de búsqueda
            if (buscar.value.trim() === "") {
                valida = false;
                errorForm.innerHTML = '<p>Por favor, complete el campo.</p>';
            }

            // Si la validación pasa, enviar el formulario
            if (valida) {
                form.submit(); // Enviar el formulario
            }
        });
    }
});
