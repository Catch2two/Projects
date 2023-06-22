const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordC = document.getElementById("passwordConfirm");
const submitButton = document.getElementById("submitBtn");
// Errors
const errorE = document.querySelector(".errorE");
const errorC = document.querySelector(".errorC");
const errorZ = document.querySelector(".errorZ");
const errorPW = document.querySelector(".errorPW");
const errorPWC = document.querySelector(".errorPWC");

// Events

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        errorE.textContent = ""
    } else {
        showErrorE();
        event.preventDefault();
    }
});

country.addEventListener("input", (event) => {
    if (country.validity.valid) {
        errorC.textContent = "";
    } else {
        showErrorC();
        event.preventDefault();
    }
});

zipCode.addEventListener("input", (event) => {
    if (zipCode.validity.valid) {
        errorZ.textContent = "";
    } else {
        showErrorZ();
        event.preventDefault();
    }
});

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        errorPW.textContent = "";
    } else {
        showErrorPW();
        event.preventDefault();
    }
});

passwordC.addEventListener("input", (event) => {
    if (passwordC.validity.valid) {
        errorPWC.textContent = "";
    } else {
        showErrorPWC();
        event.preventDefault();
    }
});

passwordC.addEventListener("input", (event) => {
    showErrorPWC();
});
// ERROR MESSAGES
function showErrorE() {
    if (email.validity.valueMissing) {
        errorE.textContent = "Please enter an Email Address."
    } else if (email.validity.typeMismatch) {
        errorE.textContent = "Entered value needs to be an email address."
    } else if (email.validity.tooShort) {
        errorE.textContent = `Email should be atleast ${email.minLength} characters; you entered ${email.value.length}.`;
    } else if (!email.value.indexOf('@') > -1) {
        errorE.textContent = "Please enter an Email Address"
    } else if (email.value.indexOf('@') > -1) {
        errorE.textContent = ""
    } 
};

function showErrorC() {
    if (country.validity.valueMissing) {
        errorC.textContent = "Please enter a country.";
    } else if (country.validity.tooShort) {
        errorC.textContent = "Country must be atleast 3 characters."
    }
};
function showErrorZ() {
    if (zipCode.value.length < 5) {
        errorZ.textContent = "Please enter a valid ZIP Code.";
    }

};
function showErrorPW() {
    if (password.validity.valueMissing) {
        errorPW.textContent = "Please enter a new password.";
    } else if (password.validity.tooShort) {
        errorPW.textContent = `Invalid password. Password must be at least 8 characters long.`;
    } 

};
function showErrorPWC() {
    if (passwordC.value !== password.value) {
        errorPWC.textContent = "Passwords do not match.";
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
    
    submitButton.addEventListener("click", (event) => {
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });
}

