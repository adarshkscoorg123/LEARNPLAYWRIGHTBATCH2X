
let p = new Promise(function (resolve, reject) {
    resolve(42);
});
p.then(function (value) {
    console.log("Answer:", value);
});

let p1 = new Promise(function (resolve, reject) {
    reject("Something broke");
});

p1.catch(function (err) {
    console.log("Caught:", err);
});

let p2 = Promise.resolve(5);

p2.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val); // Result: 50
});

Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1; // 1
    })
    .then(function (val) {
        console.log(val);
        return val + 1;  //2
    })
    .then(function (val) {
        console.log(val); //3
    });


Promise.resolve("start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke at step 2");
    })
    .then(function () {
        console.log("This will NOT run");
    })
    .catch(function (err) {
        console.log("Caught:", err.message); // Caught: Broke at step 2
    });

Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err); // Error: Test failed
    })
    .finally(function () {
        console.log("Cleanup done"); // Cleanup done
    });



Promise.resolve("Quick win")
    .then(function (msg) {
        console.log(msg); //Quick win
    });

Promise.reject("Quick loss")
    .catch(function (msg) {
        console.log(msg); // Quick loss
    });


let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3])
    .then(function (results) {
        console.log(results); //[ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]
    });


let t4 = Promise.resolve("PASS");
let t5 = Promise.reject("FAIL");
let t6 = Promise.resolve("PASS");

Promise.all([t4, t5, t6])
    .then(function (r) {
        console.log("All:", r);
    })
    .catch(function (err) {
        console.log("Stopped:", err); //Stopped: FAIL
    });


Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        console.log(r);
    });
});




