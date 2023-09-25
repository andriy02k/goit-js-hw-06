const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', handlerInput);

function handlerInput(evt) {
    const font = evt.currentTarget.value;
    text.style.fontSize = `${font}px`
};