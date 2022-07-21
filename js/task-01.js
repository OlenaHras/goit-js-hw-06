const listWithId = document.querySelector('#categories');

const listItems =  listWithId.querySelectorAll('.item');
  console.log(`Number of categories: ${listItems.length}`)

const titleOfItem = listItems.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
  
