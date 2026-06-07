
// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true1";
console.log(url.includes("staging"));
console.log(url.includes("production"));
console.log("--------");


// startsWith / endsWith
console.log(url.startsWith("https:")); // true
console.log(url.startsWith("http://"));// false
console.log(url.endsWith("true1")); // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));


// search

console.log(url.indexOf("nowhere"));
console.log(url.indexOf("x"));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically.

console.log(url.search(/login/));
console.log(url.search(/vwo/));

