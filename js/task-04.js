let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const numberValue = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementButtonClick);
incrementBtn.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    numberValue.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
    numberValue.textContent = counterValue;
}
