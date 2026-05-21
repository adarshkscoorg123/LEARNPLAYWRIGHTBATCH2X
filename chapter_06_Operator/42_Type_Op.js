
console.log(typeof "hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
// typeof undefined -> undefined
// typeof null -> object
// typeof [] -> object
console.log(typeof []); // -> object
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);// -> object

let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pramod_goa);

let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pramod_d);

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


let a = 100, b = 15, c = 8;

let result = a > b ? (a > c ? "a is greatest" : "c is greatest") : "b is greatest";

console.log(result);


let temp = 15;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);