let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('btn');

button.addEventListener('click', function (e) {
    e.preventDefault();
    let userDetails = {
        email: email.value,
        password: password.value,
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    alert('Sign up Successfully!')
    window.location.href = './signin.html'
});
