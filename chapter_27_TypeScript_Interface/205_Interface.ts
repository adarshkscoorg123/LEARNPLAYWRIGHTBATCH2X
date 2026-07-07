
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number; //Alternative syntax
}

const noObject = {
    id: 1
}

const calc: Calculator = {
    add: (a, b) => a + b, // returns the sum of 2 numbers
    subtract: (a, b) => a - b, // returns the subtraction of 2 numbers
    multiply: (a, b) => a * b  // returns the multiplication of 2 numbers
}

console.log(calc);
let addition = calc.add(10, 20); //30
console.log("The sum of 2 numbers is " + addition); //The sum of 2 numbers is 30
console.log(calc.subtract(30, 10)); //20
console.log(calc.multiply(10, 6));  //60