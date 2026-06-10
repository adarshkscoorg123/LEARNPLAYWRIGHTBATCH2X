
// Objects
// Key and value

let student1 = { name: "Amit", age: 65 }; // name and age are keys and "Amit"and 65 are values
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: 'success' };
console.log(a1.status);

let b = a;
console.log(b.status); // pass
b.status = "fail";
console.log(b.status); // fail
console.log(a.status); // fail

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {    // true-because call by reference
    console.log("true");
} else {
    console.log("false");
}