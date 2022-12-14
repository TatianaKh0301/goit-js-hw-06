const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');

form.addEventListener('submit', onFormSubmit);
inputEmail.addEventListener('input', onInputEmail);
inputPassword.addEventListener('input', onInputPassword);

function onInputEmail(event) {
    inputEmail.textContent = event.currentTarget.value;
} 

function onInputPassword(event) {
    inputPassword.textContent = event.currentTarget.value;
} 


function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = { 
        mail, 
        password,
    };

    if(inputEmail.textContent === '' || inputPassword.textContent === '' || mail === '' || password === '') {
        alert("ВСІ ПОЛЯ ПОВИННІ БУТИ ЗАПОВНЕНІ!!!!");
    } else {
        console.log(formData);
        event.currentTarget.reset();
        console.log("mail", mail);
        console.log("password", password);
    }    
}

    

