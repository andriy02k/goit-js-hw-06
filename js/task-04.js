let counter = 0;
const counterValue = document.getElementById('value');

const buttonRemove = document.querySelector('button[data-action="decrement"]');
// console.log(button);
const clickRemove = () => {
    counter -= 1;
    counterValue.textContent = counter;
};

buttonRemove.addEventListener("click", clickRemove);

const buttonAdd = document.querySelector('button[data-action="increment"]');
const clickAdd = () => {
    counter += 1;
    counterValue.textContent = counter;
};

buttonAdd.addEventListener("click", clickAdd);