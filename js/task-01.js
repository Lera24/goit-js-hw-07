const categories = document.querySelectorAll('.item');
const lengthCategories = categories.length;
console.log (`В списке ${lengthCategories} категории.`);

const animals = categories[0].firstElementChild.textContent;
const quantityAnimals = categories[0].lastElementChild.children.length;
console.log (`Категория: ${animals}`);
console.log (`Количество элементов: ${quantityAnimals}`)

const products = categories[1].firstElementChild.textContent;
const quantityProducts = categories[1].lastElementChild.children.length;
console.log (`Категория: ${products}`);
console.log (`Количество элементов: ${quantityProducts}`)

const technologies = categories[2].firstElementChild.textContent;
const quantityTechnologies = categories[2].lastElementChild.children.length;
console.log (`Категория: ${technologies}`);
console.log (`Количество элементов: ${quantityTechnologies}`)