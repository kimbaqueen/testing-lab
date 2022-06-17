const myFunctions = require('./functions');

test("Return Two Test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
});

test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James')
});

test("Add Test", () => {
    expect(myFunctions.add(1, 2)).toBe(3)
});

test("Add Test", () => {
    expect(myFunctions.add(5, 9)).toBe(14)
});