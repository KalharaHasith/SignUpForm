const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
// sign in
const form1 = document.getElementById('form1');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
const username1 = document.getElementById('username1');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmailValid(email1) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email1).toLowerCase());
}

form1.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username1.value === '') {
        showError(username1, 'User name is required');
    } else {
        showSuccess(username1);
    }

    if (email1.value === '') {
        showError(email1, 'Email is required');
    } else if (!isEmailValid(email1.value)) {
        showError(email1, 'Email is not valid');
    }
    else {
        showSuccess(email1);
    }

    if (password1.value === '') {
        showError(password1, 'Password is required');
    } else {
        showSuccess(password1);
    }
});


// transition
signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active')
);