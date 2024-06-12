function validar() {
    var isValid = true;

    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(element) {
        element.textContent = ''; 
        element.style.color = ''; 
    });

    var usernameInput = document.getElementById('input-username');
    var username = usernameInput.value.trim();
    var errorUsername = document.getElementById('error-username');
    if (username === '') {
        errorUsername.textContent = 'El nombre de usuario es obligatorio.';
        errorUsername.style.color = 'red';
        isValid = false;
    }

    var passwordInput = document.getElementById('input-password');
    var password = passwordInput.value.trim();
    var errorPassword = document.getElementById('error-password');
    if (password === '') {
        errorPassword.textContent = 'La contraseña es obligatoria.';
        errorPassword.style.color = 'red';
        isValid = false;
    }

    var confirmPasswordInput = document.getElementById('input-confirm-password');
    var confirmPassword = confirmPasswordInput.value.trim();
    var errorConfirmPassword = document.getElementById('error-confirm-password');
    if (confirmPassword === '') {
        errorConfirmPassword.textContent = 'Debe confirmar la contraseña.';
        errorConfirmPassword.style.color = 'red';
        isValid = false;
    } else if (password !== confirmPassword) {
        errorConfirmPassword.textContent = 'Las contraseñas no coinciden.';
        errorConfirmPassword.style.color = 'red';
        isValid = false;
    }

    var direccionInput = document.getElementById('input-direccion');
    var direccion = direccionInput.value.trim();
    var errorDireccion = document.getElementById('error-direccion');
    if (direccion === '') {
        errorDireccion.textContent = 'La dirección es obligatoria.';
        errorDireccion.style.color = 'red';
        isValid = false;
    }

    var comunaSelect = document.getElementById('select-comuna');
    var comuna = comunaSelect.value;
    var errorComuna = document.getElementById('error-comuna');
    if (comuna === 'default') {
        errorComuna.textContent = 'Por favor, seleccione una comuna.';
        errorComuna.style.color = 'red';
        isValid = false;
    }

    var telefonoInput = document.getElementById('input-telefono');
    var telefono = telefonoInput.value.trim();
    var errorTelefono = document.getElementById('error-telefono');
    if (telefono === '') {
        errorTelefono.textContent = 'El teléfono es obligatorio.';
        errorTelefono.style.color = 'red';
        isValid = false;
    }

    var urlInput = document.getElementById('input-url');
    var url = urlInput.value.trim();
    var errorUrl = document.getElementById('error-url');
    if (url !== '') {
        if (!validarURL(url)) {
            errorUrl.textContent = 'La URL no es válida.';
            errorUrl.style.color = 'red';
            isValid = false;
        }
    }

    var aficionesInput = document.getElementById('input-aficiones');
    var aficionesList = document.getElementById('list-aficiones');
    var aficiones = aficionesInput.value.trim();
    var errorAficiones = document.getElementById('error-aficiones');
    if (aficiones === '') {
        errorAficiones.textContent = 'Debe ingresar al menos una afición.';
        errorAficiones.style.color = 'red';
        isValid = false;
    } else {
        var aficionesArray = aficiones.split(',');
        if (aficionesArray.length < 2) {
            errorAficiones.textContent = 'Debe ingresar al menos dos aficiones separadas por coma.';
            errorAficiones.style.color = 'red';
            isValid = false;
        } else {
            aficionesList.innerHTML = '';
            aficionesArray.forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = item.trim();
                aficionesList.appendChild(li);
            });
        }
    }

    return isValid;
}

function validarURL(url) {
    var urlPattern = /^((http|https|ftp):\/\/)/;
    return urlPattern.test(url);
}

document.getElementById('btn-add-aficion').addEventListener('click', function() {
    var aficionesInput = document.getElementById('input-aficiones');
    var aficion = aficionesInput.value.trim();
    if (aficion !== '') {
        var aficionesList = document.getElementById('list-aficiones');
        var li = document.createElement('li');
        li.textContent = aficion;
        aficionesList.appendChild(li);
        aficionesInput.value = '';
    }
});
