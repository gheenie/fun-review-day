const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("class VendingMachine", () => {
  test("default constructor, getters and setters", () => {
    const testMachine = new VendingMachine();
    
    expect(testMachine.credit).toBe(0);
    expect(testMachine.stock).toEqual({ A : {}, B : {}, C : {} });
  });

  test("addStock()", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    
    expect(testMachine.credit).toBe(0);
    expect(testMachine.stock).toEqual({ A : { name: "marsBar", price: 50, quantity: 6 }, B : {}, C : {} });
  });
});
