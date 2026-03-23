/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // We use the slice() or spread operator [...] if we want to avoid 
    // mutating the original array, though the prompt usually expects 
    // the sorted array returned.
    return arr.sort((a, b) => {
        // Evaluate the function for both elements
        const valA = fn(a);
        const valB = fn(b);
        
        // Return a negative value if valA should come before valB
        // Return a positive value if valA should come after valB
        return valA - valB;
    });
};

// Key Concepts
// 1. The Comparator Function (a, b) => valA - valB
// The sort() method in JavaScript converts elements to strings by default (e.g., [1, 10, 2] becomes [1, 10, 2] because "10" comes before "2" alphabetically). To sort numbers or objects correctly, we provide a comparator:If the result is negative, a is sorted before b.If the result is positive, b is sorted before a.If the result is zero, the order stays the same.

// 2. Why fn(a) - fn(b)?
// Since the prompt guarantees that fn returns numbers, subtracting the two results is the most efficient way to determine the ascending order.If fn(a) is 5 and fn(b) is 10: $5 - 10 = -5$ (Negative $\rightarrow$ a comes first).If fn(a) is 10 and fn(b) is 5: $10 - 5 = 5$ (Positive $\rightarrow$ b comes first).