const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const submitButton = document.getElementById("submitBtn");

// Errors
const emailError = document.querySelector(".errorE");
const countryError = document.querySelector(".errorC");
const zipCodeError = document.querySelector(".errorZ");
const passwordError = document.querySelector(".errorPW");
const passwordConfirmError = document.querySelector(".errorPWC");

// Events

function showError(errorElement, message) {
  errorElement.textContent = message;
}

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    showError(emailError, "");
  } else {
    showError(emailError, "Please enter an email address.");
  }
});

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    showError(countryError, "");
  } else {
    showError(countryError, "Please enter a country.");
  }
});

zipCode.addEventListener("input", (event) => {
  if (zipCode.validity.valid) {
    showError(zipCodeError, "");
  } else {
    showError(zipCodeError, "Please enter a valid ZIP code.");
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    showError(passwordError, "");
  } else {
    showError(passwordError, "Please enter a password.");
  }
});

passwordConfirm.addEventListener("input", (event) => {
  if (passwordConfirm.value === password.value) {
    showError(passwordConfirmError, "");
  } else {
    showError(passwordConfirmError, "Passwords do not match.");
  }
});

submitButton.addEventListener("click", (event) => {
  if (passwordConfirm.value !== password.value) {
    event.preventDefault();
  }
});
