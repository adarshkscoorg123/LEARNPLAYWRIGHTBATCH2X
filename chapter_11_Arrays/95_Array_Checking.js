
// Checking Arrays

// Check if something IS an array

let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray("a"); // []
console.log(result1);
console.log("-----------");

// every function- All the conditions should pass

let bool_every_true = [80, 90, 85].every(s => s >= 70); // true
let bool_every_false = [80, 60, 85].every(s => s >= 70); // false
console.log(bool_every_true);
console.log(bool_every_false);
console.log("-----------");


// Playwright API 
let statusCode_Api = [200, 201, 203].every(statuscode => statuscode >= 200);
console.log(statusCode_Api);
console.log("-----------");



// some — AT LEAST ONE condition must pass

console.log([80, 60, 85].some(s => s < 70)); // true
console.log([80, 90, 85].some(s => s < 70)); // false

//arrow : s => s >= 70