document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("registrationForm");
    let errorMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        errorMessages.innerHTML = '';

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (username === "") {
            msgError("username cannot be empty");
        }

        let emailPattern = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-_]{2,}.[a-z]{1,}$/;
        if (!emailPattern.test(email)) {
            msgError("email is not valid")
        }

        if (password.length < 8) {
            msgError("password must contain at list 8 characters")
        }

        let passwordPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        if (!passwordPattern.test(password)) {
            msgError("password must contain letters (uppercase + lowercase), numbers, punctuation marks")
        }

        form.reset();
       

    })

    function msgError(message) {
        let errorMsg = document.createElement("div");
        errorMsg.textContent = message;
        errorMsg.style.color = "red";
        errorMessages.appendChild(errorMsg);
    }





})



