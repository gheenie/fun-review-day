const removeSmarterAgents = require('../sections/5.1-remove-smarter-agents');

describe('removeSmarterAgents()', () => {
    const notMole = {
        name: 'not mole',
        age: 99,
        aboutMe: 'I have no personality! :D',
        interests: ['code', 'guacamomo']
    };

    const sam = {
        name: 'Sam',
        age: 30,
        aboutMe: 'I have no personality! :D',
        interests: ['code', 'guacamole']
    };

    const mitch = {
        name: 'Mitch',
        age: 29,
        aboutMe: 'I am not a mole - I am a human being!',
        interests: ['Tudor hymns', 'dancing']
    };

    const jonny = {
        name: 'Jonny',
        age: 32,
        aboutMe: "I'm a father of two girls - it's great!",
        interests: ['parenting']
    };

    const vel = {
        name: 'Vel',
        age: 28,
        aboutMe: 'I love games!',
        interests: ['Magic', 'Monopoly Express']
    };

    test("empty array should return []", () => {
        const input = [];
    
        const output = removeSmarterAgents(input);
    
        const expected = [];

        expect(output).toEqual(expected);
        // Some tests for side effects.
        expect(input).not.toBe(output);
    });
    
    test("1 non-mole; 1 mole interest; 1 mole aboutMe; 1 (m o l e) aboutMe; 1 (m o l e) interest", () => {
        const input = [notMole, sam, mitch, jonny, vel];

        const output = removeSmarterAgents(input);

        const expected = [{
            name: 'not mole',
            age: 99,
            aboutMe: 'I have no personality! :D',
            interests: ['code', 'guacamomo']
        }];

        expect(output).toEqual(expected);
        // Some tests for side effects.
        expect(input).not.toBe(output);
        expect(input[0]).not.toBe(output[0]);
    });
});
