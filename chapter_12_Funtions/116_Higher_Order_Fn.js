
// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLoggin(testFn, testName) {
    let result = testFn();
    console.log(`Finished: ${testName}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

let result_1 = runWithLoggin(loginTest, "Login Test");
console.log(result_1);
let result_2 = runWithLoggin(loginTestFAILED, "Dashboard Failed Test");
console.log(result_2);
