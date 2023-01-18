const list = document.querySelector('ul');
const btn = document.querySelector('button');
const inp = document.querySelector('input');

btn.addEventListener('click', () => {
  itemToCreate = inp.value;
  inp.value = '';

  let item = document.createElement('li');
  let spanned = document.createElement('span');
  let buttonned = document.createElement('button');

  list.appendChild(item);
  spanned.textContent = itemToCreate;
  item.appendChild(spanned);
  buttonned.textContent = 'Delete';
  item.appendChild(buttonned);

  buttonned.addEventListener('click', () => {
    list.removeChild(item);
  });
  input.focus();
});
