class Person {

    name;
    static nationality = "India";
    constructor(name) {
        this.name = name;
    }
    static common_fn() {
        console.log("hi ,i can be called directly through class");

    }
}

let obj1 = new Person("Adarsh");
Person.common_fn();
console.log(obj1.name);
console.log(Person.nationality);