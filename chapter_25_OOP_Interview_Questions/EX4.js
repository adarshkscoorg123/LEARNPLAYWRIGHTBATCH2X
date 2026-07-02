// Exercise 4: Method Chaining with this
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;
    }

    display() {
        console.log("Count:", this.count);
        return this;
    }
}
new Counter().increment().increment().increment().display(); //Count: 3

// let total_count = new Counter();
// let count_1 = total_count.increment();
// console.log(count_1.count);

// let count_2 = count_1.increment();
// console.log(count_2.count);

// let count_3 = count_2.increment();
// console.log(count_3.count);

// let final_count = count_3.display();
// console.log(final_count.count);