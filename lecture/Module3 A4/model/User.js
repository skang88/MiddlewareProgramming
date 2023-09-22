class User {
    constructor(username, email, password, confirmPassword) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmedPassword= confirmPassword

    }
    
    // other methods related to the User object could be placed here
}

module.exports = User;