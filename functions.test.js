const myFunctions = require('./functions');

test("Return Two Test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
});

test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James');
});

test("Add Test", () => {
    expect(myFunctions.add(1, 2)).toBe(3);
});

test("Add Test", () => {
    expect(myFunctions.add(5, 9)).toBe(14);
});

// extra

describe("Math Functions Test", () => {
    test("add test", () => {
        expect(myFunctions.add(15, 5)).toBe(20);
    });
    test("multiply test", () => {
        expect(myFunctions.multiply(15, 5)).toBe(75);
    });
    test("divide test", () => {
        expect(myFunctions.divide(15, 5)).toBe(3);
    });
    test("subtract test", () => {
        expect(myFunctions.subtract(15, 5)).toBe(10);
    });
});