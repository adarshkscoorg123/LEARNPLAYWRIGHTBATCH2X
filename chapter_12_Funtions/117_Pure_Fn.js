
// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.


// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));

// ❌ Impure — depends on external state

let threshold = 70;

function isPassing(score) {
    return score >= threshold;  // depends on external variable
}
console.log(isPassing(threshold));


let threshold1 = 50;
function isPassing1(score) {
    return score < threshold1;  // depends on external variable
}

console.log(isPassing1(threshold1));