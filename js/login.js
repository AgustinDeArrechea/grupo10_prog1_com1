let formulario = document.querySelector(".contact-form");
let campoEmail = document.querySelector('#email');

let campoPassword = document.querySelector('#password');



let errorEmail = document.querySelector('.invalid-feedback-email');

let errorPassword = document.querySelector('.invalid-feedback-password');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let valid = true;

    

    if (campoEmail.value == "") {
        errorEmail.innerText = 'Este campo está vacío';
        errorEmail.style.display = 'block';
        valid = false;
    } else {
        errorEmail.style.display = 'none';
    }

    

    if (campoPassword.value == "") {
        errorPassword.innerText = 'Este campo está vacío';
        errorPassword.style.display = 'block';
        valid = false;
    } else {
        errorPassword.style.display = 'none';
    }

    
    if (valid) {
        formulario.submit();
    }
});
