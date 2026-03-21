// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if it's an array
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    // Check if it's an object
    // Object.keys(obj) returns an array of the object's own enumerable string-keyed property names
    return Object.keys(obj).length === 0;
};

