
// let is Block scope

let a = 20;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Attempt:", retryCount);

// let retryCount = 5;
// let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared
// redeclaration is not allowed


let testStatus = "pending";

if (testStatus == "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);
}

// console.log(executionTime); //ReferenceError: executionTime is not defined
// executionTime: is not allowed outside the block since "let" keyword is used

// below are the examples of blocks

{ } //this is a block

let b = 20;

// This is if block
if (b == 20) {
    let value = "true";
    console.log(b);
}

function name() { } // This is function block

// let = loyal
// var = traitor

// var- Person who has affairs
// let- Married person(loyal)
// const- Saint(Person who never changes)

