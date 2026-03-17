/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let currentCount = init

  return{
    increment: function(){
        return ++currentCount;
    },
    decrement: function(){
        return --currentCount;
    },
    reset: function(){
        currentCount = init;
        return currentCount;
    }    
  }  
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// State Persistence: Perhatikan bahwa kita mendefinisikan let currentCount = init. Jika kita hanya menggunakan init langsung dan mengubahnya, kita akan kehilangan referensi ke nilai awal saat fungsi reset() dipanggil.

// Pre-increment vs Post-increment:
// Di sini kita menggunakan ++currentCount (Pre-increment).
// Artinya: Tambah nilainya dulu, baru kembalikan nilainya.
// Jika menggunakan currentCount++, fungsi akan mengembalikan nilai lama sebelum ditambah, yang mana akan menyebabkan error pada hasil output tes.

// Encapsulation: Variabel currentCount tidak bisa diakses dari luar objek counter. Satu-satunya cara mengubah nilainya adalah melalui tiga metode yang kita sediakan. Ini adalah inti dari Data Privacy dalam JavaScript menggunakan closure.