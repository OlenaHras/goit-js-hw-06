const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  textOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length ===0) {
   textOutput.textContent = 'Anonymous';
  }
})