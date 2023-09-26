const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const markup = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  p.textContent = ingredient;

  li.append(p);

  return li;
});

list.append(...markup);
