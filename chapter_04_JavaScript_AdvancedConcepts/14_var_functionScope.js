
var a = 10; // Global Scope

// var is function scoped

console.log(a); // 10

function printHello() {
    console.log("Welcome to TestingAcademy");
    var a = 20; // local scope
    console.log(a); // 20
    if (true) {
        var a = 30;
        console.log(a);  //30
    }
    console.log("F ->", a);
}

console.log("G:", a);

printHello();