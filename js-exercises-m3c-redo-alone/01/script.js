let sum = 0;
function solution(number){
  for (i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }else if (number < 0) {
        return 0;
    }
    else continue;

    }
   return sum;
  }

  let num = 0;
function getCount(str) {
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
      num += 1;
    } else continue;
  }
  return num;
}