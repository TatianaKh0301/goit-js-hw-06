const inputValidation = document.querySelector('#validation-input');

const dataLength = Number(inputValidation.dataset.length);

inputValidation.addEventListener('input', onInputValue);
inputValidation.addEventListener('blur', onInputCheck);

function onInputValue (event) {
    inputValidation.textContent = event.currentTarget.value;
};

function onInputCheck (event) {
    if(inputValidation.textContent.length === dataLength) {
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.add('invalid');
    }
};