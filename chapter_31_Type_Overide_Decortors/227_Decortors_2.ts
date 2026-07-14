
function logged(target: any, methodName: string, descriptor: PropertyDescriptor): any {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]): any {
        console.log("called decorator");
        return originalMethod.apply(this, args);
    };
}

class Greeter {

    @logged
    hello(): string {
        return "Hi";
    }
}

let r = new Greeter().hello();
console.log(r);