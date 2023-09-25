const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handlerInput);

function handlerInput() {
    let str = input.value;
    if (str === "") {
        output.textContent = "Anonymous";
    } else { 
    output.textContent = str;
    }
};