let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (i; i > 1; i--) {
  if (isPrime(i)) {
    if (i === 2) {
      para.textContent += 'and ' + i + '.';
    } else {
      para.textContent += i + ', ';
    }
  }
}

const section = document.querySelector('section');
section.appendChild(para);
