// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 

// Example 1:

// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    // Store the array in the instance
    this.nums = nums;
    
    // Pre-calculate the sum during initialization for O(1) performance during addition
    this.sum = nums.reduce((acc, curr) => acc + curr, 0);
};

/**
 * Handles the '+' operator
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.sum;
};

/**
 * Handles String() and template literals
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // Join elements with commas and wrap in brackets
    return "[" + this.nums.join(",") + "]";
};

/**
 * Usage Example:
 * const obj1 = new ArrayWrapper([1, 2]);
 * const obj2 = new ArrayWrapper([3, 4]);
 * console.log(obj1 + obj2); // 10
 * console.log(String(obj1)); // "[1,2]"
 */

JavaScript
/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    // Store the array in the instance
    this.nums = nums;
    
    // Pre-calculate the sum during initialization for O(1) performance during addition
    this.sum = nums.reduce((acc, curr) => acc + curr, 0);
};

/**
 * Handles the '+' operator
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.sum;
};

/**
 * Handles String() and template literals
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // Join elements with commas and wrap in brackets
    return "[" + this.nums.join(",") + "]";
};

/**
 * Usage Example:
 * const obj1 = new ArrayWrapper([1, 2]);
 * const obj2 = new ArrayWrapper([3, 4]);
 * console.log(obj1 + obj2); // 10
 * console.log(String(obj1)); // "[1,2]"
 */

// Detailed Walkthrough
// 1. The Constructor Function (var ArrayWrapper)
// In the ES5 pattern, this function acts as the constructor. When you call new ArrayWrapper(nums), JavaScript creates a new object and sets this to point to that object.

// - We save the array to this.nums.
// - We use .reduce() immediately to calculate the total sum and store it in this.sum. This makes the "Add" operation extremely fast later on.

// 2. ArrayWrapper.prototype.valueOf
// This is a built-in hook in JavaScript.
// - When is it called? Whenever JavaScript expects a primitive value (usually a number) from your object.
// - The "Add" Operation: When you write obj1 + obj2, JavaScript looks at the objects and asks, "How do I turn these into numbers to add them?" It finds valueOf on the prototype and uses the sum we stored.

// 3. ArrayWrapper.prototype.toString
// This is the second built-in hook.

// - When is it called? Whenever the object needs to be represented as a string (e.g., String(obj) or ${obj}).
// - The Formatting: We use this.nums.join(",") which takes every element in the array and puts a comma between them. We then manually wrap it in [ and ] to satisfy the requirement of looking like a JSON array.

// Why use .prototype instead of putting it in the constructor?

// If we defined these functions inside the ArrayWrapper function using this.valueOf = function..., every single time you created a new array wrapper, a new copy of that function would be created in memory. By putting it on the .prototype, all instances share the same single function, making your code much more memory-efficient.