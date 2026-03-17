/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Penjelasan Singkat:
// Closure: Fungsi createHelloWorld adalah sebuah higher-order function yang mengembalikan fungsi lain.

// Rest Parameters (...args): Digunakan agar fungsi yang dikembalikan bisa menerima argumen sebanyak apa pun (seperti pada Contoh 2: [{}, null, 42]), namun tetap konsisten mengembalikan nilai yang sama.

// Return vs Console.log: Di platform kompetisi coding (seperti LeetCode), sistem biasanya memeriksa nilai kembalian (return value) dari fungsi, bukan apa yang tercetak di terminal.