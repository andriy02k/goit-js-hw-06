const items = document.querySelectorAll('.item');
// console.log(items);
console.log('Number of categories:', items.length);

const element = items.forEach(function (item) {
    // const title = item.querySelector('h2');
    // console.log(item.firstChild);
    // const result = `Category: ${item.firstElementChild.textContent}`;
    console.log(`Category: ${item.firstElementChild.textContent}`);
    // const ul = item.querySelector('ul');
    console.log('Elements:', item.lastElementChild.children.length);
    // return result;
});

