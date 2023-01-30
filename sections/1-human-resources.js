function removeAgents(arr) {
    if (arr.length === 0) return [];

    const employees = JSON.parse( JSON.stringify(arr) );

    return employees.filter((employee) => employee.profession !== 'mole');
}

function makeNameTags() {}

function createPoll() {}

module.exports = { removeAgents, makeNameTags, createPoll };
