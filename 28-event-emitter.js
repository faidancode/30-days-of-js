// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

// Example 1:

// Input:
// actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"],
// values = [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
// Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
// Explanation:
// const emitter = new EventEmitter();
// emitter.emit("firstEvent"); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

class EventEmitter {
  constructor() {
    // Use a Map to store event names as keys and arrays of callbacks as values
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    // If the event doesn't exist yet, initialize it with an empty array
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);
    listeners.push(callback);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        // Only remove if the callback exists to avoid errors on double-call
        if (index !== -1) {
          listeners.splice(index, 1);
        }
        return undefined;
      },
    };
  }

  emit(eventName, args = []) {
    // The error happened here because 'this.events' was undefined
    if (!this.events || !this.events.has(eventName)) {
      return [];
    }

    const listeners = this.events.get(eventName);
    const results = [];

    // Execute each callback in the order they were subscribed
    for (const callback of listeners) {
      results.push(callback(...args));
    }

    return results;
  }
}

// Logic & Walkthrough
// The core of this class is the Subscription Registry. Think of it like a mailing list: people sign up for specific topics, and when a newsletter for that topic is released, everyone on that specific list gets a copy.

// 1. Storage Structure
// We use this.events = new Map().
// Key: The name of the event (e.g., "onClick").
// Value: An array of functions [cb1, cb2, ...].
// Using an array ensures we maintain the order of subscription, which is a requirement for the emit method.

// 2. The Subscribe Method
// When you subscribe, we push your function into the array for that event. To handle unsubscribe, we leverage Closures.
// The returned object has access to the listeners array and the specific callback function passed in. When unsubscribe() is called, it searches for its own function in that array and removes it using splice.

// 3. The Emit Method
// This method "fires" the event.
// - It checks if the event name exists in our Map.
// - It iterates through the array of callbacks.
// - It uses the spread operator (...args) to pass the array of arguments into each function.
// - It collects the return values of these functions into a new array and returns it.
