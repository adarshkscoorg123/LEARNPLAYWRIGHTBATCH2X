
// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (values of tests) {
    console.log(values);
}

console.log("----");


tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

// Note : The below for loop is rarely used in Automation, so not giving much importance to learn

/* for (let [i, test] of tests.entries()) {
    console.log(i, test);
} */