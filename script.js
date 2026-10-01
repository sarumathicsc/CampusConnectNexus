// Show Password

const showPass = document.getElementById("showPass");

showPass.addEventListener("change", function () {

    const password = document.getElementById("loginPassword");

    if (this.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }

});


// Login Validation

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();

    const password = document.getElementById("loginPassword").value.trim();

    if (email === "") {

        alert("Please enter your Email");

        return;
    }

    if (password.length < 8) {

        alert("Password must contain at least 8 characters");

        return;
    }

    alert("Login Successful!");

});