function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let inputNumber = 0;

const numberValueInput = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
console.log("boxes", boxesContainer);

numberValueInput.addEventListener('input', onInputNumber);
createBtn.addEventListener('click', onMakeBlocks);

function onInputNumber (event) {
  numberValueInput.textContent = event.currentTarget.value;
  inputNumber = Number(numberValueInput.textContent);
  
}

const elements = [];
function onMakeBlocks (event) {
  for (let i = 0; i < inputNumber; i += 1) {
    const blockEl = document.createElement('div');
    blockEl.style.backgroundColor = 'red';
    // blockEl.style.border = solid
    elements.push(blockEl);
  }
  return boxesContainer.append(...elements);
  // console.log("elements", elements);
}

// const makeblocks = blockAll => {
//   return blocksAll.map(block => {
//     const blockEl = document.createElement("div");
//     blockEl.style.backgroundColor = getRandomHexColor(); 
//     return blockEl;
//   });
// };

// const elements = makeIngredients(ingredients);

// ingrediendsList.append(...elements);