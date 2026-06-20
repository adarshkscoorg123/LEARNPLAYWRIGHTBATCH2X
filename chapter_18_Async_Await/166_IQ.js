
async function sayHello() {
    return "Hello, QA!";
}

sayHello().then(function (msg) {
    console.log(msg);
});



async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code_1:", status); // Status code: 200
    console.log("------");
}

getStatus(); // Async function doesn't return anything, so we are not using then() function



async function getStatus1() {
    let status = await Promise.resolve(200);
    console.log("Status code_2:", status); //Status code: 200
    return "Hi, I am returning something";
}

getStatus1().then(function (msg1) {//Async function returns something,so we are using then() function
    console.log(msg1);
    // Hi, I am returning something 
});



async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified dashboard");
    console.log(step3);
}

testFlow();