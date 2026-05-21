
let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "RJ will go to Goa" : "No Goa";
console.log(rj_will_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "PASS" : "FAIL";
console.log(testResult);

let environment = "staging";
let baseUrl = environment === "prod" ? "https ://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = "true";
let browserMode = isCI ? "Headless" : "Headed";
console.log("Launching browser in :", browserMode, "mode");

let responseTime = 850; // ms
let sla = 1000;         // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

