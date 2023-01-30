
const deepEntries = (object) => {
    const arrayifiedObject = [];

    for (const key in object) {
        const value = object[key];

        if ( typeof value === 'object' && !Array.isArray(value) ) {
            arrayifiedObject.push([ key, deepEntries(value) ]);
        } else {
            arrayifiedObject.push([key, value]);
        }
    }

    return arrayifiedObject;
};

const deeplyEquals = (comparee1, comparee2) => {
    // If array or object, make a current level array, and recurse only within each item.
    // Then call .every on current level array.

    if ( Array.isArray(comparee1) ) {
        // Obvious false cases.

        if ( !Array.isArray(comparee2) ) return false;

        if (comparee1.length !== comparee2.length) return false;

        // Now compare deeper.

        let i = -1;
        
        return comparee1.every((comparee1Item) => deeplyEquals(comparee1Item, comparee2[++i]));
    } else if (typeof comparee1 === 'object') {
        // Obvious false case.
        if (typeof comparee2 !== typeof comparee1) return false;

        const comparisonForThisLevel = [];

        for (const key in comparee1) {
            if ( !comparee2.hasOwnProperty(key) ) {
                // Obvious false case.
                comparisonForThisLevel.push(false);
            } else {
                // Now compare deeper.
                comparisonForThisLevel.push( deeplyEquals(comparee1[key], comparee2[key]) );
            }
        }

        return comparisonForThisLevel.every((comparison) => comparison === true);
    }

    // Base case - compares primitives.

    if (comparee1 === comparee2) return true;

    return false;
};

const flat = () => { };

module.exports = { deeplyEquals, flat, deepEntries };
