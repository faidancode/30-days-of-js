// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

// Your Calculator class should have the following methods:

// add - This method adds the given number value to the result and returns the updated Calculator.
// subtract - This method subtracts the given number value from the result and returns the updated Calculator.
// multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
// divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
// power - This method raises the result to the power of the given number value and returns the updated Calculator.
// getResult - This method returns the result.
// Solutions within 10-5 of the actual result are considered correct.

class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        // Initialize the internal result with the starting value
        this.result = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this; // Return 'this' to allow method chaining
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

// Step-by-Step Walkthrough
// 1. The Concept of Method Chaining
// The key to making calc.add(5).multiply(2) work is the return this; statement at the end of every mathematical method.
// - When you call .add(5), the method updates the internal state and then returns the entire object instance back to you.
// - Because the return value is the object itself, you can immediately call another method like .multiply() on that same line.

// 2. Handling Division by Zero
// In standard JavaScript, dividing by zero returns Infinity. However, the requirements specifically ask for a custom error. By using throw new Error(...), we interrupt the chain and signal a failure if the input value is exactly 0.

// 3. Exponentiation
// For the power method, we use Math.pow(base, exponent). Alternatively, in modern JavaScript, you could use the exponentiation operator: this.result **= value;.

// 4. Getting the Final Value
// The getResult() method is the only one that does not return this. Its job is to "break" the chain and return the final numerical value stored in this.result.