const loginForm = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorMessages = document.querySelector('.error-msg');

const validate = () => {
    if (username.value.trim() === 'krishnasingha' && password.value.trim() === 'Krishna@1234') {
        if (errorMessages.style.display === 'block') {
            errorMessages.style.display = 'none';
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 10000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Welcome back! You are now logged in."
            });
            loginForm.reset();
        }

    } else {
        setTimeout(() => {
            errorMessages.style.display = 'block';
        }, 1000);
    }
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});