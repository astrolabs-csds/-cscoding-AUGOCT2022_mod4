function validateEmail (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword (password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function registerUser() {

    // 1. Get all the input elements

    var fields = document.getElementsByClassName('field');

    var firstNameField = fields[0];
    var lastNameField = fields[1];
    var emailField = fields[2];
    var passwordField = fields[3];
    var phoneField = fields[4];


    console.log( firstNameField.value );
    console.log( lastNameField.value );
    console.log( emailField.value );
    console.log( passwordField.value );
    console.log( phoneField.value );


    // 2. Validate the inputs
    var errors = [];

    if(firstNameField.value.length === 0) {
        errors.push("Please enter your first name");
    }

    if(lastNameField.value.length === 0) {
        errors.push("Please enter your last name");
    }

    if(!validateEmail(emailField.value)) {
        errors.push("Please enter your email address");
    }

    if(passwordField.value.length === 0) {
        errors.push("Please enter a password");
    }

    if(phoneField.value.length === 0) {
        errors.push("Please enter your phone number");
    }



        // 2.1. If the inputs are incorrect, throw error
        var userErrorsBox = document.getElementsByClassName('user-errors')[0];
        var userSuccessBox = document.getElementsByClassName('user-success')[0];

        // Reset the errors and success display
        userErrorsBox.style.display = "none";
        userSuccessBox.style.display = "none";

        if( errors.length > 0 ) {

            userErrorsBox.style.display = "block";
            userErrorsBox.innerHTML = errors.join("<br/>")

        }
        // 2.2  If the inputs are correct
        else {
            // 2.2.1 Send data to backend
            // 2.2.2 Show success
            userSuccessBox.style.display = "block";
        }

};