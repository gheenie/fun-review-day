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
    //expect(consoleSpy).toHaveBeenCalledTimes(0);
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
