// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation: 
// promiseAll(functions).then(console.log); // [5]

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        // Array to store the resolved values in the original order
        const results = new Array(functions.length);
        // Counter to track how many promises have successfully resolved
        let resolvedCount = 0;

        // If the input array is empty, resolve immediately
        if (functions.length === 0) {
            resolve(results);
            return;
        }

        functions.forEach((fn, index) => {
            // Execute the asynchronous function
            fn()
                .then((value) => {
                    // Place the result in the specific index to maintain order
                    results[index] = value;
                    resolvedCount++;

                    // If all functions have resolved, resolve the main promise
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // If any single promise fails, reject the main promise immediately
                    reject(error);
                });
        });
    });
};

/**
 * Example usage:
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Logic Breakdown

// Manual Synchronization: We create a new Promise wrapper. Inside, we maintain a results array and a resolvedCount integer.

// Maintaining Order: It is crucial to use the index from the forEach loop. Even if the 3rd function finishes first, its result must stay at results[2]. This ensures the output matches the input order.

// Parallel Execution: By calling fn() inside the forEach loop without an await, all asynchronous operations start at roughly the same time.

// The "Done" Condition: We check if (resolvedCount === functions.length) inside the .then() block. This ensures we only resolve the main promise once the very last asynchronous task is complete.

// Fail-Fast Mechanism: The .catch() block calls reject(error) immediately. Since a promise can only be settled once, the first error that occurs will trigger the main rejection, and any subsequent resolutions or errors will be ignored.