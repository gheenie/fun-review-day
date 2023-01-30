const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("class VendingMachine", () => {
  test("default constructor, getters and setters", () => {
    const testMachine = new VendingMachine();
    
    expect(testMachine.credit).toBe(0);
    expect(testMachine.stock).toEqual({ A : {}, B : {}, C : {} });
  });
});
