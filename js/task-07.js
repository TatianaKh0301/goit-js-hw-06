const inputFontSizeControl = document.querySelector('#font-size-control');
const textShow = document.querySelector('#text');

inputFontSizeControl.addEventListener('input', onRangeClick);

function onRangeClick(event) {
    textShow.style.fontSize = `${event.currentTarget.value}px`;
};