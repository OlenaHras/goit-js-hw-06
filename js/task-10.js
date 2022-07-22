function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]');
const boxes = document.querySelector('#boxes');
document.querySelector('[data-create]').addEventListener('click', createBoxes);
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount) {

  for (let i = 0; i < input.value; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.height = `${30 + 10*i}px`;
    newBox.style.width = `${30 + 10*i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.append(newBox);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}
