// Move between pages
let signUp = document.getElementById("signUp");
let forgetPass = document.getElementById("forget");
let resetButton = document.getElementById("reset");
let resetButtonTwo = document.getElementById("reset-2");
// signUp page
let signUpPage = document.querySelector(".main .signup");
// login page
let logInPage = document.querySelector(".main .login");
// forget Page
let forgetPage = document.querySelector(".main .forget");

// go to sign up page
signUp.onclick = (e) => {
    e.preventDefault();
    logInPage.classList.add("closed");
    signUpPage.classList.remove("closed")
}
// go to forget page
forgetPass.onclick = (e) => {
    e.preventDefault();
    logInPage.classList.add("closed");
    forgetPage.classList.remove("closed")
}
// backButton in sign up page
resetButton.onclick = () => {
    logInPage.classList.remove("closed");
    signUpPage.classList.add("closed");
    forgetPage.classList.add("closed");
}
// backButton in forget page
resetButtonTwo.onclick = resetButton.onclick;

// ===============================
// styling input label in sign up page



let firstName = document.querySelector(".signup .signup-first-name");
let firstNameLabel = document.querySelector(".signup .input-container #first-span")

let secName = document.querySelector(".signup .signup-last-name");
let lastNameLabel = document.querySelector(".signup .input-container #sec-span");

let email = document.querySelector(".signup #signup-email");
let emailLable = document.querySelector(".signup .input-container #email-span");

let signUpPass = document.querySelector(".signup #signup-password");
let signUpPassLable = document.querySelector(".signup .input-container #signup-pass-span");
let passwordIconDiv = document.querySelector(".signup .input-container .signup.icone");
let passwordIcon = document.querySelector(".signup .input-container .icone .eye");

let signUpRePass = document.querySelector(".signup #signup-repassword");
let signUpRePassLable = document.querySelector(".signup .input-container #signup-repass-span");
let passwordIconDivTwo = document.querySelector(".signup .input-container .bro.icone");
let passwordIconTwo = document.querySelector(".signup .input-container .icone .eye-2");


function setInputEvent(inputEl, labelEl) {
    inputEl.addEventListener("input", () => {
        if (inputEl.value !== "") {
            labelEl.style = "top: -5px; z-index: 0;";
            inputEl.style.backgroundColor = "white";
        }
    });
}
setInputEvent(firstName, firstNameLabel);
setInputEvent(secName, lastNameLabel);
setInputEvent(email, emailLable);
setInputEvent(signUpPass, signUpPassLable);
setInputEvent(signUpRePass, signUpRePassLable);

// icone changing
function passwordShow(mainDive, icone, input) {
    mainDive.addEventListener("click", () => {
        icone.classList.toggle("fa-eye");
        icone.classList.toggle("fa-eye-slash");
        if (icone.classList.contains("fa-eye-slash")) {
            input.type = "text";
        } else {
            input.type = "password";
        }
    })
};

passwordShow(passwordIconDiv, passwordIcon, signUpPass);
passwordShow(passwordIconDivTwo, passwordIconTwo, signUpRePass);
// ============================

let error = document.querySelector(".signup .error");
let signUpButton = document.getElementById("signup-button");


// checking form data in signup page before sending
signUpButton.onclick = (e) => {
    e.preventDefault();
    if (firstName.value.length === 0 || secName.value.length === 0) {
        error.innerHTML = "Please enter a non empty name";
    } else if (email.value.length === 0) {
        error.innerHTML = "Please enter a non empty email"
    } else if (!email.value.split("").includes('@') || !email.value.split("").includes('.')) {
        error.innerHTML = "Please enter a valid email";
    } else if (signUpPass.value.length < 6) {
        error.innerHTML = "Password Must be more than 6 chars";
    } else if (signUpPass.value.length === 0) {
        error.innerHTML = "Please enter a non empty password";
    } else if (signUpRePass.value !== signUpPass.value) {
        error.innerHTML = "Passwords do not match";
    } else {
        error.innerHTML = "";
        // get data from form
        let signUpForm = document.querySelector(".signup form");
        let formData = new FormData(signUpForm);
        let dataObj = Object.fromEntries(formData)
        let inJson = JSON.stringify(dataObj);
        window.localStorage.setItem("data", inJson);

        // message before moving
        let greenScreen = document.querySelector(".signup .done");
        greenScreen.classList.remove("closed");


        setTimeout(() => {
            // back to the main page
            signUpPage.classList.add("closed");
            logInPage.classList.remove("closed");
        }, 1500);
    }
}
// ==============================

// checking from validation of data before logging in
let logInEmail = document.getElementById("login-email");
let logInPass = document.getElementById("login-password");
let logInButton = document.getElementById("login-button");
let logInError = document.querySelector('.main .login .error');


// styling input's label in login page
let logInEmailLable = document.querySelector(".login .login-email-lable");
let logInPassLable = document.querySelector(".login .login-pass-lable");

setInputEvent(logInEmail, logInEmailLable);
setInputEvent(logInPass, logInPassLable);

// ===========================
logInButton.onclick = (e) => {
    e.preventDefault();
    // get data from storage
    let storageData = window.localStorage.getItem("data");
    let ObjOfBackedData = JSON.parse(storageData);


    if (logInEmail.value !== ObjOfBackedData['Email']) {
        logInError.innerHTML = "You Should sign up first";
    } else if (logInPass.value !== ObjOfBackedData['Password']) {
        logInError.innerHTML = "Wrong Password";
    } else {
        logInError.innerHTML = "";
        // move to store
        window.location.href="/mainPage.html";

    }
}
// ======================
// logging in with google
let googleButton = document.getElementById("google-button");
let notify = document.querySelector(".main .login .google-log");


googleButton.onclick = (e) => {
    e.preventDefault();
    notify.classList.remove('closed');
}
// closing google notify
let closingButt = document.getElementById('close');
closingButt.onclick = () => {
    notify.classList.add("closed");
}
