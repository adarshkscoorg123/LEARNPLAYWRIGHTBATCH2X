
class Person {
    // Hide you childs
    #child1;
    #child2;

    constructor(name, child1, child2) {
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;
    }


    getChild1() {
        return this.#child1;
    }
    getChild2() {
        return this.#child2;
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
    setChild2(changed_name2) {
        this.#child2 = changed_name2;
    }
}

let p = new Person("Pramod", "Varada", "Jenny");
console.log(p.name);
//console.log(p.#child1);
console.log(p.getChild1()); //Varada
p.setChild1("Vipin");
console.log(p.getChild1()); //Vipin
console.log("-------");

console.log(p.getChild2()); //Jenny
p.setChild2("Bittu");
console.log(p.getChild2()); //Bittu
