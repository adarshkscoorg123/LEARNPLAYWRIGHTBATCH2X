
// The function which doesnt return anything
function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations( Function which returns something)
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}
