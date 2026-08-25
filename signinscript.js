const signinForm = document.getElementById("signinForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const signinButton = document.getElementById("signinButton");
const signinMessage = document.getElementById("signinMessage");

const togglePassword = document.getElementById("togglePassword");
const remember = document.getElementById("remember");

const forgotPassword = document.getElementById("forgotPassword");
const createAccount = document.getElementById("createAccount");

const signinCard = document.querySelector(".signin-card");


function clearErrors() {
    emailError.textContent = "";
    passwordError.textContent = "";

    emailInput.classList.remove("input-invalid");
    passwordInput.classList.remove("input-invalid");

    signinMessage.textContent = "";
    signinMessage.className = "signin-message";
}


function showError(element, message) {
    element.textContent = message;
}


function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "HIDE";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "SHOW";
    }
});


emailInput.addEventListener("input", function () {

    if (emailInput.value.trim() !== "") {
        emailError.textContent = "";
    }

});


passwordInput.addEventListener("input", function () {

    if (passwordInput.value.trim() !== "") {
        passwordError.textContent = "";
    }

});


signinForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let valid = true;


    if (email === "") {

        showError(emailError, "Please enter your email.");

        valid = false;

    } else if (!validEmail(email)) {

        showError(emailError, "Please enter a valid email.");

        valid = false;
    }


    if (password === "") {

        showError(passwordError, "Please enter your password.");

        valid = false;

    } else if (password.length < 6) {

        showError(
            passwordError,
            "Password must contain at least 6 characters."
        );

        valid = false;
    }


    if (!valid) {

        signinCard.classList.remove("shake");

        void signinCard.offsetWidth;

        signinCard.classList.add("shake");

        return;
    }


    signinButton.classList.add("loading");

    signinMessage.textContent = "";


    setTimeout(function () {

        signinButton.classList.remove("loading");

        signinMessage.textContent =
            "Demo sign in successful.";

        signinMessage.className =
            "signin-message success";


        if (remember.checked) {

            localStorage.setItem(
                "athenaRememberedEmail",
                email
            );

        } else {

            localStorage.removeItem(
                "athenaRememberedEmail"
            );
        }


        setTimeout(function () {

            window.location.href = "index.html";

        }, 1200);

    }, 1000);

});


window.addEventListener("DOMContentLoaded", function () {

    const savedEmail =
        localStorage.getItem("athenaRememberedEmail");

    if (savedEmail) {

        emailInput.value = savedEmail;

        remember.checked = true;
    }

});


forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    signinMessage.textContent =
        "Password recovery will be available soon.";

    signinMessage.className =
        "signin-message success";
});


createAccount.addEventListener("click", function (event) {

    event.preventDefault();

    signinMessage.textContent =
        "Account registration will be available soon.";

    signinMessage.className =
        "signin-message success";
});