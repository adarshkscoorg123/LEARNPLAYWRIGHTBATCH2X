
//console.log(score);

//let score = 100; // ReferenceError: Cannot access 'score' before initialization

{

    // ---- TDZ for "score" starts here ----
    //console.log(score);  // ReferenceError!
    //score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)
}  
