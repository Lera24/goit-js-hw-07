const inputName = document.querySelector('#name-input');
const valueName = document.querySelector('#name-output');
console.log(inputName);
console.log(valueName);
const text = 'незнакомец';


inputName.addEventListener('input', onInputValue);

function onInputValue (event) { if (event.currentTarget.value.length === 0) {
   return valueName.textContent = text;
} else {
   return valueName.textContent = event.currentTarget.value;
}
};
 