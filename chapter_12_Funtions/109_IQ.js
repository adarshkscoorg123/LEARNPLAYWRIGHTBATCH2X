
// Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

let success = getStatus(220);
console.log(success);

let client_error = getStatus(450);
console.log(client_error);

let server_error = getStatus(500);
console.log(server_error);


function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}


let result = logTest("Login");
console.log(result); // undefined since there is no return

let return_greet = greet("Alice");
console.log(return_greet); // can access greet before initialization for normal function.

function greet(name1) {
    return `Hello, ${name1}!`;
}

let return_bob = sayHi("Bob");
console.log(return_bob);    //ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function (name2) {
    return `Hi, ${name2}!`;
};


