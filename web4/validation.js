const form = document.querySelector('#create-account-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');
const patronymic = document.getElementById('patronymic');
const radioGender = document.querySelector('input[name="radioSelection"]:checked').value;

// const phone = document.getElementById('phone');
// const birthday = new Date(document.querySelector('.dateInput').value);
form.addEventListener('submit', (event)=>{
    console.log(isFormValid());
    if(isFormValid()===true){
        form.submit();
    }else {
        event.preventDefault();
    }

});

function isFormValid(){
    return !(document.getElementById('emailError').innerHTML != null ||
        document.getElementById('passwordError').innerHTML != null ||
        document.getElementById('lastNameError').innerHTML != null ||
        document.getElementById('firstNameError').innerHTML != null ||
        document.getElementById('patronymicError').innerHTML != null ||
        document.getElementById('radioInputError').innerHTML != null);
}


email.addEventListener("input", () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (email.value.length === 0) {
        document.getElementById('emailError').innerHTML = 'enter an email'
    } else if (!String(email.value).match(emailRegex)) {
        document.getElementById('emailError').innerHTML = 'invalid email'
    } else {
        document.getElementById('emailError').innerHTML = null
    }
});

password.addEventListener("input", () => {
        let passwordString = String(password.value);
        if (passwordString.length === 0) {
            document.getElementById('passwordError').innerHTML = 'enter a password'
        } else if (passwordString.length > 20) {
            document.getElementById('passwordError').innerHTML = 'the password cannot be longer than 20 characters'
        } else if (!passwordString.match(/\d/g)) {
            document.getElementById('passwordError').innerHTML = 'must have at least 1 digit'
        } else if (!passwordString.match(/[A-Z]/g)) {
            document.getElementById('passwordError').innerHTML = 'must have at least 1 capital letter'
        } else if (!passwordString.match(/[!$#&]/g)) {
            document.getElementById('passwordError').innerHTML = 'must have at least 1 special symbol, eg !$#&'
        } else if (passwordString.length < 8) {
            document.getElementById('passwordError').innerHTML = 'the password cannot be shorter than 8 characters'
        } else {
            document.getElementById('passwordError').innerHTML = null
        }
    }
);

lastName.addEventListener("input", () => {
    let lastNameString = String(lastName.value);
    if (lastNameString.length === 0) {
        document.getElementById('lastNameError').innerHTML = 'last name must have at least 2 letter'
    } else if (lastNameString.match(/[!$#&]/g) || lastNameString.match(/\d/g)) {
        document.getElementById('lastNameError').innerHTML = 'no digits or special symbols'
    } else {
        document.getElementById('firstNameError').innerHTML = null
    }
});

firstName.addEventListener("input", () => {
    let firstNameString = String(firstName.value);
    if (firstNameString.length === 0) {
        document.getElementById('firstNameError').innerHTML = 'first name must have at least 2 letter'
    } else if (firstNameString.match(/[!$#&]/g) || firstNameString.match(/\d/g)) {
        document.getElementById('firstNameError').innerHTML = 'no digits or special symbols'
    } else {
        document.getElementById('firstNameError').innerHTML = null
    }
});

patronymic.addEventListener("input", () => {
    let patronymicString = String(patronymic.value);
    if (patronymicString.length <= 1) {
        document.getElementById('patronymicError').innerHTML = 'enter your patronymic'
    } else if (patronymicString.match(/[!$#&]/g) || patronymicString.match(/\d/g)) {
        document.getElementById('patronymicError').innerHTML = 'no digits or special symbols'
    } else {
        document.getElementById('patronymicError').innerHTML = null
    }
});

// phone.addEventListener("input", () => {
//     let phoneString=String(phone.value);
//     document.getElementById('phoneError').innerHTML=phoneString;
// });

radioGender.addEventListener("onload", () => {
    if (String(radioGender)===''){
        document.getElementById('radioInputError').innerHTML = 'choose something'
    }else {
        document.getElementById('radioInputError').innerHTML = null
    }
});