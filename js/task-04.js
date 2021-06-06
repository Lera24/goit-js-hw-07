////const onBtnClick = function ()

const btnRemove = document.querySelector('[data-action="decrement"]');
console.log(btnRemove);
const btnAdd = document.querySelector('[data-action="increment"]');
console.log(btnAdd);
const counter = document.querySelector('#value');
console.log(counter);
let counterValue = Number(counter.textContent);
console.log(counterValue);

const increment = () => { counterValue += Number(1);
  return counter.textContent = counterValue;
  };

btnAdd.addEventListener('click', increment);

const decrement = () => { if (counter.textContent !== "0") {
  counterValue -= Number(1);
  return counter.textContent = counterValue;
}
  return null;
  };

btnRemove.addEventListener('click', decrement);
