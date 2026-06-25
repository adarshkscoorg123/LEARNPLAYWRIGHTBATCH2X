class Car {

    name;
    // CAB
    //  Constructor. 
    constructor(name) {
        this.name = name;
    }
    // Attribute 
    // Behavior. 
    drive() {
        console.log("i am driving", this.name);
    }

}

const tesla = new Car("Model S");
tesla.drive();

const i10 = new Car("grand i10");
i10.drive();