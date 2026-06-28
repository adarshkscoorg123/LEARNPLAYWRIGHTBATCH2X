
// Exercise 3: `this` Refers to Current Object
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hi, I am " + this.name);
    }
}

let u1 = new User("Alice"); // Hi, I am Alice
let u2 = new User("Bob");   // Hi, I am Bob

u1.greet();
u2.greet();