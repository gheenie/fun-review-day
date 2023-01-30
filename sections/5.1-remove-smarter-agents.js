function removeSmarterAgents(arr) {
    if (arr.length === 0) return [];

    const employees = JSON.parse( JSON.stringify(arr) );

    return employees.filter((item) => {
        const employee = new Employee(item.name, item.age, item.aboutMe, item.interests);

        return !employee.isMole();
    });
}

class Employee {
    #name = '';
    #age = 0;
    #aboutMe = '';
    #interests = [];

    constructor(name, age, aboutMe, interests) {
        this.#name = name;
        this.#age = age;
        this.#aboutMe = aboutMe;
        this.#interests = interests;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get aboutMe() {
        return this.#aboutMe;
    }

    get interests() {
        return this.#interests;
    }

    isMole() {
        function containsMoleInSequence(string) {
            let subString = string.toLowerCase();
            let letterIndex = string.indexOf('m');
            if (letterIndex === -1) return false;

            subString = subString.substring(letterIndex + 1);
            letterIndex = string.indexOf('o');
            if (letterIndex === -1) return false;

            subString = subString.substring(letterIndex + 1);
            letterIndex = string.indexOf('l');
            if (letterIndex === -1) return false;

            subString = subString.substring(letterIndex + 1);
            letterIndex = string.indexOf('e');
            if (letterIndex === -1) return false;

            return true;
        }

        if ( containsMoleInSequence(this.#aboutMe) ) return true;

        return this.#interests.some((interest) => containsMoleInSequence(interest));
    }
}

module.exports = removeSmarterAgents;
