let formulario = document.querySelector('#form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let feedback = document.querySelectorAll('.feedback-error')

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let valida = true

    if (email.value == "") {
        feedback[0].innerHTML = `<p class="error">Por favor complete el campo</p>`;
        feedback[0].style.display = 'block';
        valida = false;
    }

    if (password.value == "") {
        feedback[1].innerHTML = `<p class="error">Por favor complete el campo</p>`;
        feedback[1].style.display = 'block';
        valida = false;
    }

    if (valida) {
        formulario.submit();  //Si no hay errores entonces enviamos el formulario con el método submit().
    }


});