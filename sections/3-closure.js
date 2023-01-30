function generateMultiples(multiple) {
    function incrementTimes(length) {
        const multiples = [];
        
        for (let i = 1; i <= length; i++) {
            multiples.push(multiple * i);
        }

        return multiples;
    }

    return incrementTimes;
}

function secureFunc(realPassword, callback) {
    function onValidate(passwordAttempt, ...args) {
        if (passwordAttempt !== realPassword) return 'Sorry your password is incorrect!';
        
        if (args === undefined) return callback();

        return callback.apply(null, [...args]);
    }

    return onValidate;
}

module.exports = { generateMultiples, secureFunc };
