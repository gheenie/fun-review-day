const {
  createPoll,
  makeNameTags,
  removeAgents,
} = require("../sections/1-human-resources.js");

describe("removeAgents()", () => {
  test("empty array should return []", () => {
    const input = [];
    const consoleSpy = jest.spyOn(console, "log");

    const output = removeAgents(input);

    const expected = [];
    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("one employee; with mole profession", () => {
    const input = [{ name: "Mitch", profession: "mole" }];
    const consoleSpy = jest.spyOn(console, "log");

    const output = removeAgents(input);

    const expected = [];
    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("one employee; without mole profession", () => {
    const input = [{ name: "Sam", profession: "artist" }];
    const consoleSpy = jest.spyOn(console, "log");

    const output = removeAgents(input);

    const expected = [{ name: "Sam", profession: "artist" }];
    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("multiple employees; with and without mole profession", () => {
    const input = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
      { name: "Artiste Two", profession: "artist" },
      { name: "Molee Two", profession: "mole" }
    ];
    const consoleSpy = jest.spyOn(console, "log");

    const output = removeAgents(input);

    const expected = [{ name: "Sam", profession: "artist" }, { name: "Artiste Two", profession: "artist" }];
    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });
});

describe.only("makeNameTags()", () => {
  test("empty array should return []", () => {
    const input = [];
    const consoleSpy = jest.spyOn(console, "log");

    const output = makeNameTags(input);

    const expected = [];
    expect(output).toEqual(expected);

    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("one guest", () => {
    const input = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      }
    ];
    const consoleSpy = jest.spyOn(console, "log");

    const output = makeNameTags(input);

    const expected = ['Mr Sam Caine, Northcoders'];
    expect(output).toEqual(expected);

    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("multiple guests", () => {
    const input = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    const consoleSpy = jest.spyOn(console, "log");

    const output = makeNameTags(input);

    const expected = ['Mr Sam Caine, Northcoders', 'Mr Kermit The Frog, Jim Henson Studios'];
    expect(output).toEqual(expected);

    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });
});
