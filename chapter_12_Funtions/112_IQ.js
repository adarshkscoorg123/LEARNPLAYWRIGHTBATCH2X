
let g_x = 10;

// Nested scope | blocked scope 
function outer() {
    let x = 110;

    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
    //console.log(y); //ReferenceError: y is not defined since it is local to inner() function
}

outer();
