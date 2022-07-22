const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const decrementClick = () => {
  counterValue -= 1;   
  valueEl.textContent = counterValue;
};

const incrementClick = () => {
  counterValue += 1;   
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementClick);
incrementBtn.addEventListener('click', incrementClick);