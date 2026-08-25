const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const joinForm = document.getElementById("joinForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const passwordToggle = document.getElementById("passwordToggle");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const terms = document.getElementById("terms");


/* ==================== THEME ==================== */

const savedTheme = localStorage.getItem("athenaTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.textContent = "☾";
} else {
    themeIcon.textContent = "☀";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    themeIcon.textContent = isLight ? "☾" : "☀";

    localStorage.setItem(
        "athenaTheme",
        isLight ? "light" : "dark"
    );
});


/* ==================== PASSWORD SHOW / HIDE ==================== */

passwordToggle.addEventListener("click", () => {

    const isPassword =
        password.type === "password";

    password.type =
        isPassword ? "text" : "password";

    confirmPassword.type =
        isPassword ? "text" : "password";

    passwordToggle.textContent =
        isPassword ? "HIDE" : "SHOW";
});


/* ==================== PASSWORD STRENGTH ==================== */

password.addEventListener("input", () => {

    const value = password.value;

    let strength = 0;

    if (value.length >= 6) {
        strength++;
    }

    if (value.length >= 10) {
        strength++;
    }

    if (/[A-Z]/.test(value)) {
        strength++;
    }

    if (/[0-9]/.test(value)) {
        strength++;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        strength++;
    }


    const percentage =
        Math.min(strength * 20, 100);

    strengthBar.style.width =
        `${percentage}%`;


    if (value.length === 0) {

        strengthText.textContent =
            "PASSWORD STRENGTH";

    } else if (strength <= 2) {

        strengthText.textContent =
            "WEAK";

    } else if (strength <= 4) {

        strengthText.textContent =
            "GOOD";

    } else {

        strengthText.textContent =
            "STRONG";
    }
});


/* ==================== VALIDATION ==================== */

function setError(input, errorElement, message) {

    input.classList.add("invalid");

    errorElement.textContent = message;
}


function clearError(input, errorElement) {

    input.classList.remove("invalid");

    errorElement.textContent = "";
}


/* ==================== FORM ==================== */

joinForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmError =
        document.getElementById("confirmError");

    const termsError =
        document.getElementById("termsError");


    let valid = true;


    /* NAME */

    if (fullName.value.trim().length < 2) {

        setError(
            fullName,
            nameError,
            "Please enter your full name."
        );

        valid = false;

    } else {

        clearError(
            fullName,
            nameError
        );
    }


    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email.value.trim())) {

        setError(
            email,
            emailError,
            "Please enter a valid email address."
        );

        valid = false;

    } else {

        clearError(
            email,
            emailError
        );
    }


    /* PASSWORD */

    if (password.value.length < 6) {

        setError(
            password,
            passwordError,
            "Password must contain at least 6 characters."
        );

        valid = false;

    } else {

        clearError(
            password,
            passwordError
        );
    }


    /* CONFIRM PASSWORD */

    if (
        confirmPassword.value !==
        password.value
    ) {

        setError(
            confirmPassword,
            confirmError,
            "Passwords do not match."
        );

        valid = false;

    } else {

        clearError(
            confirmPassword,
            confirmError
        );
    }


    /* TERMS */

    if (!terms.checked) {

        termsError.textContent =
            "You must accept the Terms & Conditions.";

        valid = false;

    } else {

        termsError.textContent = "";
    }


    if (!valid) {
        return;
    }


    /* ==================== SAVE USER ==================== */

    const user = {

        name: fullName.value.trim(),

        email: email.value.trim(),

        joinedAt: new Date().toISOString()

    };


    localStorage.setItem(
        "athenaUser",
        JSON.stringify(user)
    );


    /* ==================== SUCCESS ==================== */

    const joinButton =
        document.getElementById("joinButton");

    joinButton.innerHTML =
        "<span>ACCOUNT CREATED ✓</span>";

    joinButton.style.pointerEvents =
        "none";


    setTimeout(() => {

        window.location.href =
            "index.html";

    }, 900);
    document.getElementById("createAccount").addEventListener("click", function () {
    const email = document.getElementById("joinEmail").value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    localStorage.setItem("athenaEmail", email);

    window.location.href = "index.html?joined=true";
    
});
});

