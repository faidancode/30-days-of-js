// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  // Variable to keep track of the active timer
  let timeoutId;

  return function (...args) {
    // If the function is called again, cancel the previous pending execution
    clearTimeout(timeoutId);

    // Schedule the execution of 'fn' after 't' milliseconds
    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/**
 * Example usage:
 * * const log = (...inputs) => console.log("Executed with:", inputs);
 * const dlog = debounce(log, 50);
 * * dlog(1); // This call will be cancelled if another call happens within 50ms
 * dlog(2); // This will execute after 50ms if no other calls occur
 */
