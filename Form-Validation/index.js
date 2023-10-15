// accessing all elements
const form = document.getElementById('form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


// adding events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})




// defining successmsg function
const successMsg = () => {
    let formContain = document.getElementsByClassName('form-container');

    var count = formContain.length - 1;
    for (var i = 0; i < formContain.length; i++) {
        if (formContain[i].className === "form-conatriner success") {
            var rate = 0 + i;
            if (rate === count) return true;
        }
        else {
            return false;
        }
    }
}


// email validation function
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;

    if (dot === emailVal.length - 1) return false;

    return true;
}


// validate function
const validate = () => {
    // use trim() to remove white space from stating & the last position
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();


    // validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    }
    else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username must be atleast 3 character long')
    }
    else {
        setSuccessMsg(username);
    }


    // validate email logic
    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'invalid email')
    }
    else {
        setSuccessMsg(email);
    }


    // validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone cannot be blank');
    }
    else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'invalid number')
    }
    else {
        setSuccessMsg(phone);
    }


    // validate password
    if (passwordVal === "") {
        setErrorMsg(password, 'password is required');
    }
    else if (passwordVal.length <= 6) {
        setErrorMsg(password, 'minimum 6 character is required')
    }
    else {
        setSuccessMsg(password);
    }


    // validate confirm password
    if (confirmPasswordVal === "") {
        setErrorMsg(confirmPassword, 'confirm password is required');
    }
    else if (passwordVal != confirmPasswordVal) {
        setErrorMsg(confirmPassword, 'password must be same')
    }
    else {
        setSuccessMsg(confirmPassword);
    }


    // checking before submission
    successMsg();

    window.alert(` Congratulations ${usernameVal}, Your Registration is Successfull!`);
    

}


// defining error message
function setErrorMsg(input, error) {
    const formContainer = input.parentElement;
    const small = formContainer.querySelector('small');
    formContainer.className = "form-container error";
    small.innerText = error;
}

// defining success message
function setSuccessMsg(input) {
    const formContainer = input.parentElement;
    formContainer.className = "form-container success";
}