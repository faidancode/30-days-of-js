/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // 1. Immediate execution at 0ms
    fn(...args);

    // 2. Set up recurring interval
    const timer = setInterval(() => {
        fn(...args);
    }, t);

    // 3. Return the cancel function
    return function cancelFn() {
        clearInterval(timer);
    };
};

// How it Works
// The Initial Call: Since setInterval only starts the first execution after the first interval has passed, we must manually call fn(...args) once at the very beginning to satisfy the 0ms requirement.
// setInterval: This creates a background process that pushes the function onto the task queue every t milliseconds. It returns a "timer ID."
// clearInterval: This is the "kill switch." When cancelFn is eventually called (via a separate setTimeout in the test cases), it uses the timer ID to stop any future executions.