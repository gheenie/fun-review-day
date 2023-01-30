const {
  createPoll,
  makeNameTags,
  removeAgents,
} = require("../sections/1-human-resources.js");
const NCFruitBowl = require('../data/poll-data.js');

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
    expect(input[0]).not.toBe(output[0]);
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
    expect(input[0]).not.toBe(output[0]);
    expect(input[2]).not.toBe(output[1]);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });
});

describe("makeNameTags()", () => {
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

describe("createPoll()", () => {
  test("empty array should return {}", () => {
    const input = [];
    const consoleSpy = jest.spyOn(console, "log");

    const output = createPoll(input);

    const expected = {};

    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("one string; >1 counts", () => {
    const input = ["dog", "dog", "dog"];
    const consoleSpy = jest.spyOn(console, "log");

    const output = createPoll(input);

    const expected = { dog: 3 };

    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("multiple strings; 1 and >1 counts", () => {
    const input = ["cake", "biscuit", "biscuit"];
    const consoleSpy = jest.spyOn(console, "log");

    const output = createPoll(input);

    const expected = { cake: 1, biscuit: 2 };

    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });

  test("using NCFruitBowl", () => {
    const input = NCFruitBowl;
    const consoleSpy = jest.spyOn(console, "log");

    const output = createPoll(input);

    const expected = {
      apple: 276,
      pear: 223,
      banana: 263,
      orange: 238,
      'lonesome plum': 1
    };

    expect(output).toEqual(expected);
    // Some tests for side effects.
    expect(input).not.toBe(output);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
    consoleSpy.mockClear();
  });
});
