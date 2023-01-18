const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');
const section = document.querySelector('section');
section.appendChild(list);

for (const currentItem of myArray) {
  let listItem = document.createElement('li');
  listItem.textContent = currentItem;
  list.appendChild(listItem);
}
