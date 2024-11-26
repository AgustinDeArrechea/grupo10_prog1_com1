let formulario = document.querySelector(".formulario-login");
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let errorEmail = document.querySelector('.invalid-feedback-email');
let errorPassword = document.querySelector('.invalid-feedback-password');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let valid = true;

    

    if (campoEmail.value == "") {
        valid = false;
        alert("Por favor complete el campo email")
    }  

    

    if (campoPassword.value == "") {
        valid = false;
        alert("Por favr complete el campo contraseña")
    }  

    
    if (valid) {
        formulario.submit();
    }
});


let buscar = document.querySelector('#search');
let errorForm = document.querySelector('.error-form');
let form = document.querySelector('#search-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let valida = true;

    if (buscar.value== "") {
        valida = false;
        errorForm.innerHTML = '<p class="error-buscador">Por favor, complete el campo.</p>';
    }
    if ((buscar.value.length < 3) && (buscar.value.length != 0)){
        valida = false;
        errorForm.innerHTML = '<p class="error-buscador">Ingrese minimo 3 casracteres</p>';
    }
    if (valida) {
        this.submit();
    }
});
