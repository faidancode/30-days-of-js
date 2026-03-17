/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: function(otherVal){
            if(val === otherVal){
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function(otherVal){
            if(val != otherVal){
                return true
            } else {
                throw new Error("Equal")
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Chaining & Objects: Soal ini melatih cara membuat fungsi yang mengembalikan sebuah objek, sehingga kita bisa memanggil fungsi berikutnya menggunakan notasi titik (expect(x).toBe(y)).

// Error Handling: Di dunia nyata, backend harus menangani error dengan baik. Penggunaan throw new Error() sangat penting agar sistem testing (atau middleware di aplikasi Anda) tahu bahwa ada sesuatu yang tidak sesuai ekspektasi.

// Strict Equality: Menggunakan === dan !== adalah standar dalam JavaScript untuk menghindari type coercion yang tidak terduga.