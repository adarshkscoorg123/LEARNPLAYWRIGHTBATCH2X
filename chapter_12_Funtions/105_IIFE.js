
// Below is an example of IIFE, function doesn't require a name
(function () {
    console.log("Hi, Immediately invoked function expression");
})();


(function () {
    // playwright to run the test
})();


(function () {
    console.log("Staging");
})();

(() => {
    console.log("Setup complete");
})();

