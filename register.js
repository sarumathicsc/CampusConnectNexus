const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        try {

            let name = document.getElementById("name").value.trim();
            let regno = document.getElementById("regno").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let department = document.getElementById("department").value;

            if(name=="")
                throw "Student Name is required";

            if(regno=="")
                throw "Register Number is required";

            if(email=="")
                throw "Email is required";

            if(password.length < 8)
                throw "Password must contain at least 8 characters";

            if(phone.length != 10)
                throw "Phone Number must contain exactly 10 digits";

            if(department=="Select Department")
                throw "Please select a Department";

            alert("Registration Successful!");

        }

        catch(error){

            alert(error);

        }

    });

}