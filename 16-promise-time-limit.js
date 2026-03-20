// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Set up a timer to reject if the limit is reached
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Execute the original function
            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutId); // Cancel the timer if fn wins
                    resolve(result);
                })
                .catch((err) => {
                    clearTimeout(timeoutId); // Cancel the timer if fn fails early
                    reject(err);
                });
        });
    };
};

// Key Concepts:

// The Promise Wrapper: We return a new function that returns a Promise. This allows us to manually control when the execution is considered "finished" or "failed."
// setTimeout: This acts as our alarm clock. If $t$ milliseconds pass, the callback triggers and calls reject("Time Limit Exceeded").
// clearTimeout: This is crucial for performance and preventing memory leaks. If the original function fn finishes successfully (or throws its own error) before the time limit, we stop the "alarm clock" so it doesn't fire later.
// Spread Operator (...args): Since fn can take any number of arguments, we use the spread operator to pass them through correctly.