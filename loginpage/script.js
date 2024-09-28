// Store users in localStorage (simulated database)
function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (!username || !password) {
        alert("Please fill out both fields.");
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
        alert("User already exists! Please login.");
    } else {
        // Save user credentials in localStorage
        localStorage.setItem(username, password);
        alert("Registration successful! You can now login.");
        window.location.href = 'index.html'; // Redirect to login after registration
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        alert("Please fill out both fields.");
        return;
    }

    // Check if user exists and password matches
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        localStorage.setItem('loggedInUser', username); // Mark user as logged in
        window.location.href = 'secured.html'; // Redirect to secured page
    } else {
        alert("Invalid username or password.");
    }
}

function logout() {
    localStorage.removeItem('loggedInUser'); // Log out the user
    window.location.href = 'index.html'; // Redirect to login page
}
