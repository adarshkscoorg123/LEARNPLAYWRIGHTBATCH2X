
function beforeSomething(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
        console.log("EAT");
        return original.apply(this, arguments);
    };
    return descriptor;
}

function BeforeSomeSomeThing(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
        console.log("SLEEP");
        return original.apply(this, arguments);
    };
    return descriptor;
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);