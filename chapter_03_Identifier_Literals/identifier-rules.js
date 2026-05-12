// ============================================
// JavaScript Identifier Rules — All Examples
// ============================================

// ----- Rule 1: Must start with letter, _, or $ -----
let name = 'Adarsh';     // ✓ letter
let _private = 'secret'; // ✓ underscore
let $dollars = 100;      // ✓ dollar sign

// Invalid (these will cause SyntaxError — uncomment to test):
// let 1stPlace = 'no';  // ✗ starts with digit
// let -dash = 'no';     // ✗ starts with hyphen
// let @name = 'no';     // ✗ starts with special char


// ----- Rule 2: Subsequent chars can include digits -----
let item2 = 'second item';
let user123 = 'john';
let v1_0 = 'version 1.0';


// ----- Rule 3: Cannot be reserved keyword -----
// Invalid (uncomment to test):
// let if = true;     // ✗ 'if' is reserved
// let return = 42;   // ✗ 'return' is reserved
// let class = 'cs';  // ✗ 'class' is reserved
// let let = 1;       // ✗ 'let' is reserved
// let const = 2;     // ✗ 'const' is reserved


// ----- Rule 4: Case-sensitive -----
let myVar = 'lowercase';
let MyVar = 'Uppercase';
let MYVAR = 'ALL CAPS';
console.log(myVar, MyVar, MYVAR);
// → three different variables


// ----- Rule 5: No spaces or special chars -----
let camelCase = 'ok';      // ✓
let snake_case = 'ok';     // ✓

// Invalid (uncomment to test):
// let my var = 'no';      // ✗ space
// let first-name = 'no';  // ✗ hyphen (minus operator)
// let hello! = 'no';      // ✗ exclamation


// =========================
// Summary — run this file
// =========================
console.log('--- Rule 1: Start letter / _ / $ ---');
console.log('  ✓ name, _private, $dollars');

console.log('--- Rule 2: Digits allowed after first char ---');
console.log('  ✓ item2, user123, v1_0');

console.log('--- Rule 3: Reserved keywords forbidden ---');
console.log('  ✗ if, return, class, let, const');

console.log('--- Rule 4: Case-sensitive ---');
console.log('  ✓ myVar, MyVar, MYVAR → 3 different vars');

console.log('--- Rule 5: No spaces / special chars ---');
console.log('  ✗ my var, first-name, hello!');
