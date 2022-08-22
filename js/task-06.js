const inputValidation = document.querySelector('#validation-input');

const dataLength = Number(inputValidation.dataset.length);
console.log("dataLength", dataLength);

inputValidation.addEventListener('input', onInputValue);
inputValidation.addEventListener('blur', onInputCheck);

function onInputValue (event) {
    inputValidation.textContent = event.currentTarget.value;
    console.log("inputValidation.textContent", inputValidation.textContent.length);
};

function onInputCheck (event) {
    if(inputValidation.textContent.length === dataLength) {
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.add('invalid');
    }
};