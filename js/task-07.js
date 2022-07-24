const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
// console.log(text.textContent);
function onChangeInput() {
  const inputValue = Number(input.value);
  text.style.fontSize = `${inputValue}px`;
}
input.addEventListener('input', onChangeInput);