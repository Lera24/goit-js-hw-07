const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input',changeSizeText);

function changeSizeText () {
     const sizeValue = input.value;
     console.log(sizeValue);
return text.style.fontSize = sizeValue + 'px';
};