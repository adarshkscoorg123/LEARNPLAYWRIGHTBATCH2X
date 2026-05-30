
let fruits = ["banana", "apple", "cherry"];

fruits.sort();
console.log(fruits);


let number = [3, 1, 4];
number.sort()
console.log(number);

let number1 = [3, 1, 4, 5, 9, 14, 25, 35]; // Natural Sorting, lexicographic Sorting)
number1.sort();
console.log(number1);

number1.sort((a, b) => a - b);
console.log(number1);

number1.sort((a, b) => b - a);
console.log(number1);

