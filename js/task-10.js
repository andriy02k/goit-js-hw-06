function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector('#boxes');
const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');


create.addEventListener('click', () => createBoxes(input.value));
destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement('div');
    // createBox.classList.add(box);
    createBox.style.width = `${30 + i * 10}px`;
    createBox.style.height = `${30 + i * 10}px`;
    createBox.style.backgroundColor = getRandomHexColor();

    box.append(createBox);
  };
}

function destroyBoxes() {
  box.innerHTML = "";
}


