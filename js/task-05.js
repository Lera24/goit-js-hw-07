const inputName = document.querySelector('#name-input');
const valueName = document.querySelector('#name-output');
console.log(inputName);
console.log(valueName);

inputName.addEventListener('input', onInputValue);

function onInputValue (event) {
   return valueName.textContent = event.currentTarget.value;
};
