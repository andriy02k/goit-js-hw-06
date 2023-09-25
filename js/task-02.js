const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const markup = ingredients.map(ingredient => {
  const li = document.createElement("li");
  const p = document.createElement("p");

  li.setAttribute("class", 'item');
  p.textContent = ingredient;
  li.append(p);

  return li
});
console.log(markup);
list.append(...markup);