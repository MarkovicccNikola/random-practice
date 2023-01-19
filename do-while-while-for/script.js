/*
let i = 0;
let n = 0;
let isPrime = true;

let z;

for (i = 2; i <= 10 ; i++) {
    if (i % 2 === 0) console.log(i);  
} 

console.log('Next');

while(n < 3) {
    console.log(`number ${n}!`);
    n++;
}



for (;;){
    let x = prompt("Enter a number greater than 100");
    if (x >= 100 || !x) break;  
}
*/

//Prime number is a number that has a remainder of 0 only when divided by 1 and itself, in all other cases it has a remainder that is not 0.

let number = 100;
let i;
let j;

nextPrime:
for (i = 2; i <= number; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(`${i} is prime`);
}

