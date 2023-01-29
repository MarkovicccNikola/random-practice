let str = '';
function repeatString(word, times) {
    for (i = 0; i < times; i++) {
        str += word;
    }
    return str;
}

repeatString('k', 4);
console.log(str);