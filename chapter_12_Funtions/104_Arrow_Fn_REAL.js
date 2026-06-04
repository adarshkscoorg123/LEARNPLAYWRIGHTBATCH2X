
// if (ourStatusCode >= 200 && ourStatusCode < 300)
//This is a perfectly normal function. 

function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
    else {
        console.log("Request is wrong")
    }
}

// This is a function as an expression. 
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
    else {
        console.log("Request is not correct")
    }
}

// Arrow function
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

validateStatusCode_Arrow(210);
validateStatusCode_Exp(190);
validateStatusCode(50);