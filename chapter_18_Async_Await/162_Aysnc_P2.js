
function getToken() {
    return Promise.resolve("abc123");
}

// Playwright
// page.goto() - Promise ()
// await page.goto();

async function run() {
    let token = await getToken();
    console.log(token);   // abc123
}

run();


function getToken1() {
    return Promise.reject("Some kind of error");
}

async function run1() {
    try {
        let token1 = await getToken1();
        console.log(token1);
    } catch (error1) {
        console.log("Caught error:", error1); // Outputs: Caught error: Some kind of error
    }
}

run1();