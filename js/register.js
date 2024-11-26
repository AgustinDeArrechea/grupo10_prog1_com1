let formulario = document.querySelector('#form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let feedback = document.querySelectorAll('.feedback-error')

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let valida = true

    if (email.value == "") {
        feedback[0].textContent = `Porfavor complete el campo`;
        feedback[0].style.display = 'block';
        valida = false;
    }

    if (password.value == "") {
        feedback[1].textContent = `Porfavor complete el campo`;
        feedback[1].style.display = 'block';
        valida = false;
    }

    if (valida) {
        formulario.submit();  //Si no hay errores entonces enviamos el formulario con el método submit().
    }


});



let buscar = document.querySelector('#search');
let errorForm = document.querySelector('.error-form');
let form = document.querySelector('#search-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let valida = true;

    if (buscar.value.trim() === "") {
        valida = false;
        errorForm.innerHTML = '<p>Por favor, complete el campo.</p>';
    }

    if (valida) {
        form.submit();
    }
});