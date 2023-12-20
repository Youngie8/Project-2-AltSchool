let username = prompt("Please Enter your Username",);
const password = prompt("Please Enter a password!");
const confirmPassword = prompt("Please confirm your password!");

function validateUser() {
    // Validate user details
    if (username.length >= 10 || username == null) {
        alert("Username must be less than 10 characters and have a character at least!");
        return false;
    } else if (password.length <= 6 || password == null) {
        alert("Password must be greater than 6 characters!");
        return false;
    } else if (password !== confirmPassword) {
        alert("Passwords must match!");
        return false;
    }
    // Create user object and store details
    const user = {
        username: username,
        password: password,
    };

    // Display user details in paragraph element
    document.getElementById("user_name").innerText = JSON.stringify("UserName: " + user.username);
    document.getElementById("user_password").innerText = JSON.stringify("Password: " + user.password);

    return true;
}

validateUser();