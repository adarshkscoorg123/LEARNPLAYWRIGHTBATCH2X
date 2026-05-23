
let count = 10;
while (count < 5) {
    console.log(count);
    count++;
}

// The below code gives infinite loop as the output(So be careful while running the code)
let n = 1;
do {
    console.log(n);
} while (n < 3);