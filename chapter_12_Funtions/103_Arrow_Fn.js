
// Arrow Function (ES6)

function greet(name1) {
    return "Hi " + name1;
}

let result = greet("Adarsh");
console.log(result);
console.log("-----------");

const greet1 = function (name2) {
    return "Hi " + name2;
}

let result2 = greet1("Pramod");
console.log(result2);
console.log("-----------");


const greet2 = (name3) => "Hi " + name3;

let result3 = greet2("Suresh");
console.log(result3);
console.log("-----------");

// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const doubleIt = (n) => n * 2;
let result4 = doubleIt(30);
console.log(result4);

const printIt = (name) => console.log(name);
printIt("Dutta");