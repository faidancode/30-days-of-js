/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

// How it Works

// new Promise(...): We manually create a Promise because setTimeout is callback-based, not promise-based by default.
// resolve: This is the function we call when the asynchronous task (the timer) is finished.
// setTimeout(resolve, millis): We pass the resolve function directly to setTimeout. Once millis has passed, the engine calls resolve(), which transitions our promise from "pending" to "fulfilled."