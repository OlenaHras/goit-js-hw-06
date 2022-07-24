function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]');
const boxes = document.querySelector('#boxes');
document.querySelector('[data-create]').addEventListener('click', handleClick);
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function handleClick() {
  const amount = input.value;
  createBoxes(amount);
}
  
function createBoxes(amount) {
  let arrOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {  
    const newBox = document.createElement('div');
    newBox.style.height = `${30 + 10*i}px`;
    newBox.style.width = `${30 + 10*i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    arrOfBoxes.push(newBox);
  }
  boxes.append(...arrOfBoxes);
}


function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}
