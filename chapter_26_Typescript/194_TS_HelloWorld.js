"use strict";
let testName = "Login Test";
function add_ts(a, b) {
    return a + b;
}
let addition_2 = add_ts(10, 40);
console.log(addition_2);
//In TS, we need to mention data type for variable declaration ex: let testName: string = "Login Test"
//In TS, We need to add data type in parameters section as well as in return type section
//ex:
// function add_ts(a: number, b: number): number {
// return a + b;
// }
