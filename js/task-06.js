const textInput = document.querySelector('#validation-input');
const dataLength = textInput.getAttribute('data-length');

function onInputBlur(event) {
  
  if (event.target.value.length !== Number(dataLength)) {
    textInput.classList.remove('valid');
  return textInput.classList.add('invalid');
  }
  
  textInput.classList.remove('invalid');
  return textInput.classList.add('valid');
}

textInput.addEventListener('blur', onInputBlur);