const inputValidation = document.querySelector('#validation-input');

const dataLength = Number(inputValidation.dataset.length);

let inputValidationTextLength = 0;

inputValidation.addEventListener('input', onInputValue);
inputValidation.addEventListener('blur', onInputCheck);

function onInputValue (event) {
    inputValidation.textContent = event.currentTarget.value;
    inputValidationTextLength = Number(inputValidation.textContent.length);
};

function onInputCheck(event) {
    console.log("inputValidation", inputValidation);
    if(inputValidationTextLength === dataLength || inputValidation.classList.contains('invalid')) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }
};