
// Creating Arrays// Array literal (preferred)

let browsers = ["Chrome", "Firefox", "Safari"];
let num = [11, 22, 33, 44];

// Array constructor
let scores = new Array(4);// here "4" is the length and not value
scores[0] = 10;
scores[1] = 20;
scores[2] = 30;
scores[3] = 40;
let scores2 = new Array(1, 2, 3);// here 1,2,3 are the values in the array
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);//indexes, 0-3: length = 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);


// let numbers1 = Array.from("123456789");
// console.log(numbers1);