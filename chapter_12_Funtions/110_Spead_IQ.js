
let num = [1, 21, 36, 46];

function add(a, b, c, d) {
    return a + b + c + d;
};

let addition_of_numbers = add(...num); // note: only 3 dots are allowed
console.log(addition_of_numbers);


let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let codes_response = hasError(...responseCodes);
console.log(codes_response);

