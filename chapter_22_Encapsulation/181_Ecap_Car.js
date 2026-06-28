
class Car {
    #engine;

    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "V8");
//console.log(tesla.engine); //undefined (cannot access private variable outside)
console.log(tesla.getEngine());// can access private variables through methods
tesla.setEngine("V9");
console.log(tesla.getEngine());