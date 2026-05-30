
// Slicing & Combining
let arr = [11, 42, 63, 24, 55];
//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

console.log(arr.slice(1, 3)); // ( start, end-1) - 42,63
console.log(arr);
console.log("-----------");


console.log(arr.slice(2, 4)); // [ 63, 24 ]
console.log(arr);
console.log("-----------");

console.log(arr.slice(2, 5)); // [ 63, 24, 55 ]
console.log(arr);
console.log("-----------");

console.log(arr.slice(2));
console.log("-----------");

//start from the -1 and till 2.
console.log(arr.slice(-2));
console.log(arr);
console.log("-----------");


console.log(arr.slice(0));
console.log("-----------");

let arr1 = [10, 20, 30, 40, 50];
let s = arr1.slice(1, 4);   // [20, 30, 40]
console.log(s);
console.log(arr1);
console.log("-----------");

let arr2 = [10, 20, 30, 40, 50];
let removed = arr2.splice(1, 2);   // remove 2 values from index 1
console.log(removed);             // [20, 30]
console.log(arr2);

// Note: Difference between slice and splice is that
// In slice, It will create a new array and original array is unchanged when we make some changes.
// In splice,it will create a new array by modifying the original array,when we make some changes