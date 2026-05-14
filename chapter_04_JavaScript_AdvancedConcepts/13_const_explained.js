
const BASE_URL = "https://app.thetestingacademy.com/";
//BASE_URL = "https://staging.thetestingacademy.com/";

// TypeError: Assignment to constant variable.
// not possible to reassign or redeclare

let name = "Adarsh";

name = "Suresh";

// Example of block scope for Let
{
    let name = "Amith";
    console.log(name);
}

console.log(name);