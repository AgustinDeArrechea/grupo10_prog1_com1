let formulario = document.querySelector(".formulario-login");
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
<<<<<<< HEAD
let errorEmail = document.querySelector('.invalid-feedback-email');
let errorPassword = document.querySelector('.invalid-feedback-password');
=======


>>>>>>> 5a0ae881a66a1286e98e8ef9f07034fbb4145f04

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
