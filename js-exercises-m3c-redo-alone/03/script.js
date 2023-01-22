function reverseString(str) {
    return str.split("").reverse().join("");
}

let reversedString = reverseString(prompt('Enter a string to reverse.'));
alert(reversedString);