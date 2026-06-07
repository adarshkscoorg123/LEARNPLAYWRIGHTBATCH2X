
console.log(typeof ("200"));// string
console.log(typeof (50)); // number
console.log(typeof (true)); // number

let str = "Hello, World!";
console.log(str.length); // Length always starts from 1, total len- 13
console.log("---------");
// Access by index
console.log(str[4]); // O
console.log(str[0]); // H
console.log(str[7]); // W
console.log(str.at(-1));
console.log(str.at(-6));

// index = 0, length = 1
console.log(str.charAt(0)); //H
console.log(str.charCodeAt(0)); // ASCII value -72