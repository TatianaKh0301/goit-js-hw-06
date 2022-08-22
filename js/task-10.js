function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let inputNumber = 0;

const numberValueInput = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


numberValueInput.addEventListener('input', onInputNumber);
createBtn.addEventListener('click', onMakeBlocks);
destroyBtn.addEventListener('click', destroyBoxes);

function onInputNumber (event) {
  numberValueInput.textContent = event.currentTarget.value;
  inputNumber = Number(numberValueInput.textContent);
}

const elements = [];
function onMakeBlocks(event) {
  event.preventDefault();
  if (inputNumber === 0) {
    alert('Нужно ввести число!!!!');
  } else {
    for (let i = 0, j = 30; i < inputNumber; i += 1, j += 10) {
      const blockEl = document.createElement('div');
      blockEl.classList.add = 'block';
      blockEl.style.backgroundColor = getRandomHexColor();
      const paddingSize = `${j}`;
      blockEl.style.padding = `${paddingSize}px`;
      elements.push(blockEl);
    }
  boxesContainer.append(...elements);
  }
  
}

function destroyBoxes(event) {
  event.preventDefault();
  const blockElementsDel = document.querySelectorAll('#boxes > div');
  for (let i = 0; i < blockElementsDel.length; i += 1) {
    blockElementsDel[i].remove();
  }
  numberValueInput.value = '';
  elements.splice(0, blockElementsDel.length);
  inputNumber = 0;
}
