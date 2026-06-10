
// Primitive vs Reference Types
let a = 10;
let b = a;
console.log(a);
console.log(b);
b = 99;
console.log(a); // 10
console.log(b); // 99

// Objects — copied by REFERENCE , call by ref.
// Reference - object, array, function

let obj1 = {
    val: 10
};

let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.val = 99;
console.log(obj1.val); // 99
console.log(obj2.val); // 99