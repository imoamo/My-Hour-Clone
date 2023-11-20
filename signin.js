let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('btn');

button.addEventListener('click', function (e) {
    e.preventDefault();
    let userDetails = {
        email: email.value,
        password: password.value,
    }
    let savedDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

    if (userDetails.email === savedDetails.email && userDetails.password === savedDetails.password) {
        localStorage.setItem("isAuth", "Authenticated");
        window.location.href = "./home.html";
    } else {
        alert('Wrong Credentials!');
    }

});