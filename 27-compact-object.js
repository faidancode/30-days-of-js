// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Base case: If obj is null or not an object (primitive), return it as is
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        const compactedArray = [];
        for (const item of obj) {
            const val = compactObject(item);
            // Only push if the processed value is truthy
            if (Boolean(val)) {
                compactedArray.push(val);
            }
        }
        return compactedArray;
    }

    // Handle Objects
    const compactedObj = {};
    for (const key in obj) {
        const val = compactObject(obj[key]);
        // Only add the key if the processed value is truthy
        if (Boolean(val)) {
            compactedObj[key] = val;
        }
    }
    return compactedObj;
};

