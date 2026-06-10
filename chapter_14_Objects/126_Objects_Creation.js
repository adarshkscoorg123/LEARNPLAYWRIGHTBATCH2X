
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) { // false because both are created in heap
    console.log("true");
} else {
    console.log("false");
}