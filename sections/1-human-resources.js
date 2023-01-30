function removeAgents(arr) {
    if (arr.length === 0) return [];

    const employees = JSON.parse( JSON.stringify(arr) );

    return employees.filter((employee) => employee.profession !== 'mole');
}

function makeNameTags(arr) {
    if (arr.length === 0) return [];

    const guests = JSON.parse( JSON.stringify(arr) );

    return guests.map((guest) => `${guest.title} ${guest.forename} ${guest.surname}, ${guest.company}`);
}

function createPoll(arr) {
    if (arr.length === 0) return {};

    const pollReplies = JSON.parse( JSON.stringify(arr) );
    const pollCounts = {};

    pollReplies.forEach((reply) => pollCounts[reply] = pollCounts[reply] + 1 || 1);

    return pollCounts;
}

module.exports = { removeAgents, makeNameTags, createPoll };
