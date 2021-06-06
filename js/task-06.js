const fieldInput = document.querySelector('#validation-input');
console.log(fieldInput);

fieldInput.addEventListener('change', checkLengthInput);

function checkLengthInput (event) {
if (fieldInput.hasAttribute('class')) {
    fieldInput.removeAttribute('class');
};
if (event.currentTarget.value.length !== Number(fieldInput.getAttribute('data-length'))) {
        return fieldInput.classList.add('invalid');};
        return fieldInput.classList.add('valid');
};
