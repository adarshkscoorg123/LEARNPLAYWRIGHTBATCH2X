
class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod();
let parent1 = new Father();

pramod.home(); //3BHK
parent1.home(); //2BHK