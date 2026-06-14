
let a = [1, 2, 3, 4];

let rakesh_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 1 -> 0,0

// Print all the elements

for (let i = 0; i < 3; i++) { //  i = 0,1,2 - rows
    for (let j = 0; j < 3; j++) { // j = 0,1,2 -  columns
        // Correctly stringify the i and j coordinates
        console.log(`[${i}][${j}]: ` + rakesh_grid[i][j]);
    }
    console.log("\n");
}

// Debug the values