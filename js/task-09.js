function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', onCurrentColor);

function onCurrentColor(event) {
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = currentColor.textContent; 
}



