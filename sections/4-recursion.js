
const deepEntries = (object) => {
    const arrayifiedObject = [];

    for (key in object) {
        const value = object[key];

        if ( typeof value === 'object' && !Array.isArray(value) ) {
            arrayifiedObject.push([ key, deepEntries(value) ]);
        } else {
            arrayifiedObject.push([key, value]);
        }
    }

    return arrayifiedObject;
};

const deeplyEquals = () => { };

const flat = () => { };

module.exports = { deeplyEquals, flat, deepEntries };
