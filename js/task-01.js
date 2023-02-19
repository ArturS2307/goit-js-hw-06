const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach(function(item) {
    const title = item.firstElementChild.textContent;
    const el = item.lastElementChild.children.length;
    console.log('Category:', title);
    console.log('Elements:', el);
})

