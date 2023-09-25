const items = document.querySelectorAll('.item');
// console.log(items);
console.log('Number of categories:', items.length);

const element = items.forEach(function (item) {
    const title = item.querySelector('h2');
    const rusult = `Category: ${title.textContent}`;
    console.log(rusult);
    const ul = item.querySelector('ul');
    console.log('Elements:', ul.children.length);
    return rusult;
});

