// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.

var TimeLimitedCache = function() {
    this.cache = new Map(); // Initialize the storage
};

/** * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExists = this.cache.has(key);
    
    // If it exists, we must cancel the old timer
    if (alreadyExists) {
        clearTimeout(this.cache.get(key).timeoutId);
    }

    // Set the new timer
    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    // Update the Map
    this.cache.set(key, { value, timeoutId });
    
    return alreadyExists;
};

/** * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** * @return {number}
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

// Logic Breakdown

// The Map Strategy: We use a Map where the key is the user's provided key, and the value is an object containing both the value and the timeoutId.

// Overwriting Keys: The set method checks this.cache.has(key). If it returns true, it means a valid (un-expired) key is already there. We must call clearTimeout on the old ID; otherwise, the old timer would still trigger and delete your new data prematurely.

// Automatic Cleanup: By putting this.cache.delete(key) inside the setTimeout, the cache manages its own memory. As soon as the duration hits, the key vanishes, and count() (which relies on Map.size) updates automatically.

// Handling get and count: Since expired keys are deleted immediately by the timeout callback, these methods don't need any complex "is it expired?" logic. If it’s in the Map, it’s valid.
