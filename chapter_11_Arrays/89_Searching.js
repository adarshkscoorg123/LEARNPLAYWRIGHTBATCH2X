
let results = ["pass", "fail", "pass", "error", "fail"];

// indexof - searches from the start
let fail_1 = results.indexOf("fail"); //1
let skip_1 = results.indexOf("skip"); // -1
console.log(fail_1);
console.log(skip_1);
console.log("------------")

// lastIndexOf — searches from the end
let fail_lastindex = results.lastIndexOf("fail");    // 4
console.log(fail_lastindex);
console.log("------------")

// includes — returns boolean
let error_include = results.includes("error"); // true
let skip_include = results.includes("skip");       // false
console.log(error_include);
console.log(skip_include);
console.log("------------")


// find — returns first matching element
let nums = [10, 25, 30, 45];
let first = nums.find(x => x > 20); // 25
console.log(first);

let last = nums.findLast(n => n > 20);  // 45
console.log(last);

console.log("------------")
// findIndex
let index = nums.findIndex(n => n > 25); // 2
console.log(index);

//findlastindex
let last2 = nums.findLastIndex(n => n > 25); // 3
console.log(last2);

