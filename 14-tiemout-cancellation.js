/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Schedule the execution of fn
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    // Return the function that can cancel the timer
    return function cancelFn() {
        clearTimeout(timer);
    };
};

// How it Works
// setTimeout: We start a timer that will execute fn with the spread args after t milliseconds. This function returns a unique timeout ID.
// Closure: The returned cancelFn maintains access to the timer variable thanks to JavaScript closures.
// clearTimeout: If cancelFn is called, it uses that timeout ID to tell the JavaScript engine, "Don't run that function after all."