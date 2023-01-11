//If 1 or 0 inputs are given it returns NaN as it is expecting 2 inputs.

function adder(num1, num2) {
    console.log(num1 + num2);
}
adder(); 

//This doesn't expect any inputs.

function logger() {
    console.log("ok");
}
logger();

//This one is interesting

const interesting = "LET'S GO!"
function toLower(text) {
    const lowerCased = text.toLowerCase();
    console.log(lowerCased);
}
toLower(prompt("please") + prompt("2nd"));

