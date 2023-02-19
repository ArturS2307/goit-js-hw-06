const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const list = document.getElementById('ingredients');

  ingredients.forEach((ingredient) => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    list.append(item);
  })
// document.body.append(list);

// const updateList = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('');
// list.insertAdjacentHTML("beforeend", updateList);
// console.log(list);