const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

const element = ingredients.map((el) => {
  const products = document.createElement('li');
   products.textContent = el;
   return products;
  });
  
  ingredientsList.append(...element);
