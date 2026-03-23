// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

 

// Example 1:

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Explanation
// Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // If n is 0, no flattening should occur, return the original array
    if (n === 0) return arr;

    const result = [];

    // Recursive helper function
    function flatten(currentArray, currentDepth) {
        for (const item of currentArray) {
            // Check if the item is an array AND we haven't exceeded depth n
            if (Array.isArray(item) && currentDepth < n) {
                // If yes, spread its elements into the recursion
                flatten(item, currentDepth + 1);
            } else {
                // Otherwise, push the item as-is (either a number or a deeply nested array)
                result.push(item);
            }
        }
    }

    flatten(arr, 0);
    return result;
};

// Key Concepts
// 1. Recursive LogicThe core of this solution is the flatten helper function. It takes two arguments: the current array being inspected and its currentDepth.
// - If we encounter a subarray, we check: Is currentDepth < n? * If true, we go one level deeper.
// - If false, we stop flattening and treat that subarray like a single element.
// 2. Why not use ... (Spread Operator)?While you could write result.push(...flat(item, n - 1)), using a helper function with a shared result array is generally more memory-efficient for very deep arrays (up to the constraint of 1000). It avoids creating many intermediate array copies in memory.
// 3. Base Case ($n=0$)The problem states that if $n=0$, the array should remain unchanged. We handle this at the very beginning of the function to save processing time.