let formulario = document.querySelector(".formulario-login");
let campoEmail = document.querySelector('#email');

let campoPassword = document.querySelector('#password');



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
