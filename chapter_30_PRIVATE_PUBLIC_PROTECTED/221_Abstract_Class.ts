abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    loan1(): void {
        console.log("Hi");
    }
}

class UITest extends BaseTest {

    public time: number;

    constructor(testName: string, time: number) {
        super(testName);
        this.time = time;
    }
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
    loan(): void {
        console.log("  GIVE LOAN");
    }

}

let obj1 = new UITest("Addy", 1000);
obj1.execute();
