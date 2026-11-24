async function hashPassword(password) {
    const data = new TextEncoder().encode(password);
    const buffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem("athenaUsers")) || {};
    } catch (e) {
        return {};
    }
}

async function registerUser(name, email, password) {
    const users = getUsers();
    const key = email.toLowerCase();

    if (users[key]) {
        return { ok: false, message: "This email is already registered." };
    }

    users[key] = {
        name: name,
        email: key,
        passwordHash: await hashPassword(password)
    };

    localStorage.setItem("athenaUsers", JSON.stringify(users));
    return { ok: true };
}

async function loginUser(email, password) {
    const user = getUsers()[email.toLowerCase()];

    if (!user) {
        return { ok: false, message: "No account found with this email." };
    }

    if (user.passwordHash !== await hashPassword(password)) {
        return { ok: false, message: "Wrong password." };
    }

    localStorage.setItem("athenaCurrentUser", user.email);
    return { ok: true };
}
