const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("basic behaviours", () => {
  test("default constructor, getters and setters", () => {
    const testMachine = new VendingMachine();
    
    expect(testMachine.credit).toBe(0);
    expect(testMachine.stock).toEqual({ A : {}, B : {}, C : {} });
  });

  test("addStock()", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };

    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    
    expect(testMachine.stock).toEqual({ A : { name: "marsBar", price: 50, quantity: 6 }, B : {}, C : {} });

    // Exception/allowed for non-existent row?
  });

  test("addCredit()", () => {
    const testMachine = new VendingMachine();

    expect(testMachine.credit).toBe(0);

    testMachine.addCredit(50);

    expect(testMachine.credit).toBe(50);

    testMachine.addCredit(10);

    expect(testMachine.credit).toBe(60);
  });
});

describe("purchaseItem()", () => {
  const marsBars = { name: "marsBar", price: 50, quantity: 6 };
  const testMachine = new VendingMachine();
  testMachine.addStock(marsBars, "A");

  test("insufficient credit", () => {
    testMachine.addCredit(30);
    const output = testMachine.purchaseItem("A");

    expect(output).toBe('Insufficient credit!');
    expect(testMachine.credit).toBe(30);
  });

  test("sufficient credit", () => {
    testMachine.addCredit(30);
    const output = testMachine.purchaseItem("A");

    expect(output).toBe('marsBar');
    expect(testMachine.credit).toBe(10);
    expect(testMachine.stock).toEqual({ A : { name: "marsBar", price: 50, quantity: 5 }, B : {}, C : {} });
  });
});
