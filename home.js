let button = document.getElementById('logout');
button.onclick = function () {
    let userResponse = window.confirm("Do you want to sign out?");
    if (userResponse) {
        let isAuth = localStorage.getItem('isAuth') || "Not Authenticated";
        if (isAuth !== 'Authenticated') {
            alert(" user is not authenticated");
            window.location.href = "./signup.html";
        } else {
            localStorage.setItem('isAuth', "Not Authenticated");
            // location.reload();
            window.location.href = "./signin.html";
        }
    } else {
        alert('ok!');
        console.log("Function not executed.");
    }

}

let buttt = document.getElementById('log');
buttt.onclick = function () {
    let userResponse = window.confirm("Do you want to sign out?");
    if (userResponse) {
        let isAuth = localStorage.getItem('isAuth') || "Not Authenticated";
        if (isAuth !== 'Authenticated') {
            alert(" user is not authenticated");
            window.location.href = "./signup.html";
        } else {
            localStorage.setItem('isAuth', "Not Authenticated");
            // location.reload();
            window.location.href = "./signin.html";
        }
    } else {
        alert('ok!');
        console.log("Function not executed.");
    }

}



document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.toggle('show');

    document.getElementById('toggleElement').addEventListener('click', function () {
        let elementToToggle = document.getElementById('elementToToggle');

        // Toggle the 'hidden' class to show or hide the element
        if (elementToToggle.style.display === 'none' || elementToToggle.style.display === '') {
            elementToToggle.style.display = 'block';
        } else {
            elementToToggle.style.display = 'none';
        }
    });

});