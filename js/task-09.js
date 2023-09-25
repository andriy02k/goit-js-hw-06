const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', handlerClick);

function handlerClick() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}