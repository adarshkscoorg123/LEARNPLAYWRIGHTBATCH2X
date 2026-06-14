
function print() {
    console.log("Print Function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, You order is placed which is " + ClipboardItem);
    pramodCallback();
}

// First Way
placeOrder("Pizza", print);

placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function without name!");
});

// Third Way - Arrow Fn

placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!");
});