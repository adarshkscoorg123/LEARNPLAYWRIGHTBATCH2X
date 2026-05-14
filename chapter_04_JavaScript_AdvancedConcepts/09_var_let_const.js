
var v = 10;
let l = 20;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox";// redeclaration allowed(not allowed in Java)
browser = "Edge";// reassignment allowed(allowed in Java)

var testCases = ["login", "Logout", "signup", "neutral"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);


console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi, I am a function");
}

say();
say();
say();