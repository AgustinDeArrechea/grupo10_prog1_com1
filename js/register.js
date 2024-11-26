let formulario = document.querySelector('#form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let feedback = document.querySelectorAll('.feedback-error')

formulario.addEventListener('submit', function(event) {
    let valida = true
    event.preventDefault();

    if (email.value == "") {
        feedback[0].textContent = `<p class="error">Porfavor complete el campo </p>`;
        feedback[0].style.display = 'block';
        valida = false;
    }

    if (password.value == "") {
        feedback[1].textContent = `<p class="error">Porfavor complete el campo </p>`;
        feedback[1].style.display = 'block';
        valida = false;
    }

});