// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    // Initialize an empty array to hold the chunks
    const chunkedArray = [];
    
    // Iterate through the array, jumping by the 'size' each time
    // The expression i += size acts as a step increment. Instead of moving through the array one element at a time (like i++), it jumps forward by the specific chunk size you've defined.

    // Direct Access: It ensures that i always lands exactly on the starting index of each new chunk (0, 3, 6, etc., if the size is 3).
    for (let i = 0; i < arr.length; i += size) {
        // Use slice to get a subarray from index i to i + size
        // slice() handles cases where the end index exceeds arr.length automatically
        const subarray = arr.slice(i, i + size);
        
        // Push the subarray into our results container
        chunkedArray.push(subarray);
    }
    
    return chunkedArray;
};

// How it Works

// Iteration Logic: By setting the loop increment to i += size, we directly land on the starting index of every new chunk.
// The slice Method: The arr.slice(start, end) method is perfect here because it returns a shallow copy of a portion of an array. If the end index is greater than the length of the sequence, slice extracts through to the end of the sequence, which perfectly handles your "last subarray" requirement.
// Efficiency: This approach has a time complexity of $O(n)$, where $n$ is the length of the array, as we visit each element exactly once during the slicing process.