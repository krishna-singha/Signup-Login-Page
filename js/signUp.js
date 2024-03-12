const form = document.getElementById('login-form');
const fullName = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const terms = document.getElementById('terms-condition');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const isUsername = (username) => {
    var pattern = /^[a-zA-Z0-9_]{5,}$/; // Allows letters, numbers, and underscores; minimum length of 5 characters
    return pattern.test(username);
}

const isEmail = (email) => {
    let atSymbol = email.indexOf('@');
    if (atSymbol < 1) return false;
    let dot = email.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === email.length - 1) return false;
    return true;
}

const isPassword = (password) => {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return pattern.test(password);
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'inputs error';
    small.innerText = message;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'inputs success';
}

const successMsg = () => {

    let formCon = document.getElementsByClassName('inputs');
    let count = formCon.length - 1;
    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "inputs success") {
            let sRate = 0 + i;
            if (sRate === count) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Account creation successful! Welcome aboard."
                });
                form.reset();
            }
        } else {
            return false;
        }
    }
}

const validate = () => {
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    // Validate Name
    if (nameValue === "") {
        setErrorFor(fullName, 'Name cannot be blank.');
    }
    else if (nameValue.length < 3) {
        setErrorFor(fullName, 'Name must be at least 3 characters long.');
    }
    else {
        setSuccessFor(fullName);
    }

    // Validate Email
    if (emailValue === "") {
        setErrorFor(email, 'Email cannot be blank.');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid.');
    } else {
        setSuccessFor(email);
    }

    // Validate Username
    if (username.value === "") {
        setErrorFor(username, 'Username cannot be blank.');
    } else if (isUsername(username.value) === false) {
        setErrorFor(username, 'At least 5 characters, letters, numbers, and underscores only.');
        
    } else {
        setSuccessFor(username);
    }

    // Validate Password
    if (password.value === "") {
        setErrorFor(password, 'Password cannot be blank.');
    } else if(isPassword(password.value) === false) {
        setErrorFor(password, 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.');
    } else {
        setSuccessFor(password);
    }

    // Validate Terms and Conditions
    if (terms.checked === false) {
        checkbox.className = 'inputs error';
    }
    else {
        setSuccessFor(terms);
    }

    successMsg();
}