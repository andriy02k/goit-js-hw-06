const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const markup = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  p.textContent = ingredient;

  li.append(p);

  markup.push(li);
});

list.append(...markup);
