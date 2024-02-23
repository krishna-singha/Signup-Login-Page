// Function to toggle password visibility

function togglePassword() {
    const password = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-pass');
    
    if (password.type === 'password') {
        password.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        password.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}

// Event listener for clicking on the eye icon
document.getElementById('toggle-pass').addEventListener('click', function() {
    togglePassword();
});
