// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const resultStore = {};

    // 1. Process the first array
    for (const obj of arr1) {
        resultStore[obj.id] = obj;
    }

    // 2. Process the second array and merge
    for (const obj of arr2) {
        if (resultStore[obj.id]) {
            // If ID exists, merge properties. 
            // Properties in obj (arr2) will override resultStore[obj.id] (arr1)
            resultStore[obj.id] = { ...resultStore[obj.id], ...obj };
        } else {
            // If ID is new, just add it
            resultStore[obj.id] = obj;
        }
    }

    // 3. Extract values, sort by ID ascending, and return
    return Object.values(resultStore).sort((a, b) => a.id - b.id);
};

// Why This Works

// 1. The Power of the Hash Map
// By using resultStore[obj.id], we can check if an ID already exists in O(1) time. If we used nested loops to find matching IDs, the complexity would be O(n×m), which would be too slow for the given constraints.

// 2. The Spread Operator (...)
// The syntax { ...resultStore[obj.id], ...obj } is a clean way to merge two objects.
// - It takes all properties from the first object.
// - It then takes all properties from the second object.
// - If a property name (key) exists in both, the second one (from arr2) overwrites the first.

// 3. Sorting
// Since the problem requires the joinedArray to be sorted by id, we use Object.values() to turn our map back into an array and apply .sort((a, b) => a.id - b.id).