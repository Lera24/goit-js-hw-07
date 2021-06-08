const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const firstValue = `${input.value}px`;
console.log(firstValue);

input.addEventListener('input',changeSizeText);

function changeSizeText () {
const sizeValue = text.style.fontSize = input.value + 'px';
console.log(sizeValue);
return sizeValue;
};

