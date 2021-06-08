const categories = document.querySelectorAll('.item');
const lengthCategories = categories.length;
console.log (`В списке ${lengthCategories} категории.`);

const titleAll = categories.forEach((value) => console.log(`Категория ${value.firstElementChild.textContent}. 
Количество элементов ${value.lastElementChild.children.length}`));