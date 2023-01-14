/*
Pseudo Code + Notes

    - Take the list of names from the "people" array
    - From those names put everyone into "guests" array except for 'Phil' and "Lola".
    - Have the people stored in guests admitted and guests refused array.
*/

const people = [
  'Chris',
  'Anne',
  'Colin',
  'Phil',
  'Lola',
  'Sam',
  'Kay',
  'Bruce',
];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + '.';
refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + '.';
