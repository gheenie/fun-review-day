const {
  deepEntries,
  deeplyEquals,
  flat,
} = require("../sections/4-recursion.js");

describe("deepEntries()", () => {
  test("flat object; 1 item", () => {
    expect( deepEntries({ name: "Sam" }) ).toEqual([ ["name", "Sam"] ]);
  });
  
  test("flat object; >1 items", () => {
    expect( deepEntries({ name: "Sam", favBook: "Blood Meridian" }) ).toEqual([ ["name", "Sam"], ["favBook", "Blood Meridian"] ]);
  });
  
  test("1 nest level object", () => {
    const output = deepEntries({ 
      name: "Sam", 
      pets: { 
        name: "fido" 
      } 
    });

    const expected = [
      ["name", "Sam"],
      ["pets", [
        ["name", "fido"]
      ]]
    ];

    expect(output).toEqual(expected);
  });

  test(">1 nest level object", () => {
    const output = deepEntries({
      name: "Sam",
      favBook: { 
        title: "Blood Meridian", 
        author: { 
          name: "Cormac McCarthy" 
        } 
      }
    });

    const expected = [
      ["name", "Sam"],
      ["favBook", [
        ["title", "Blood Meridian"], 
        ["author", [
          ["name","Cormac McCarthy"]
        ]] 
      ]]
    ];

    expect(output).toEqual(expected);
  });
  
  test(">1 nest level object; longest nest is in the middle", () => {
    const output = deepEntries({
      name: "Sam",
      favBook: { 
        title: "Blood Meridian", 
        author: { 
          name: "Cormac McCarthy" 
        } 
      },
      pets: { 
        name: "fido" 
      }, 
      testProp: "testVal"
    });

    const expected = [
      ["name", "Sam"],
      ["favBook", [
        ["title", "Blood Meridian"], 
        ["author", [
          ["name","Cormac McCarthy"]
        ]] 
      ]],
      ["pets", [
        ["name", "fido"]
      ]],
      ["testProp", 'testVal']
    ];

    expect(output).toEqual(expected);
  });
});
