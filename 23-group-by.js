// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
// The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    // Initialize an empty object to store our groups
    const result = {};

    // Iterate through every element in the array
    for (const item of this) {
        // Generate the key by passing the item into the callback function
        const key = fn(item);

        // If the key doesn't exist in our result object yet, 
        // initialize it with an empty array
        if (!result[key]) {
            result[key] = [];
        }

        // Add the current item to the array associated with that key
        result[key].push(item);
    }

    return result;
};

/**
 * Example Usage:
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// How the Logic Works

// The Accumulator: We use an object (result) to act as a container. Think of it like a mailroom with different bins for different categories.

// Key Generation: For every item, we call fn(item). Whatever that function returns becomes the Key (the label on the bin).

// Group Check: The line if (!result[key]) is crucial. It checks if we have already created a "bin" for that specific key. If not, we create a new empty array [] so we have somewhere to push the data.

// Preserving Order: Because we use a standard for...of loop, we process items from index 0 to the end, which automatically satisfies the requirement that items in the value lists stay in their original order.