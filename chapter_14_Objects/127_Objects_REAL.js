
let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}

delete config.browser;
console.log(config);

let config2 = {
    browser1: "fireFox",
    timeout1: 2000,
    testname1: "logout test"
};

console.log(config2.browser1);