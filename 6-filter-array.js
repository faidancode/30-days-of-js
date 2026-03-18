/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // 1. Inisialisasi array kosong untuk menampung elemen yang lolos seleksi
    const filteredArr = [];

    // 2. Lakukan iterasi pada setiap elemen array input
    for (let i = 0; i < arr.length; i++) {
        // 3. Panggil fn(arr[i], i). Jika hasilnya truthy, masukkan ke filteredArr
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    // 4. Kembalikan hasil akhir
    return filteredArr;
};

// Poin Penting

// Konsep Truthy: Dalam JavaScript, nilai seperti 1, "hello", atau true adalah truthy. Sedangkan 0, "" (string kosong), null, undefined, dan NaN adalah falsy. Pada Example 3, jika n + 1 hasilnya 0, maka elemen tersebut dibuang karena 0 bernilai falsy.

// Memory Management: Berbeda dengan .map() di mana kita bisa menggunakan new Array(arr.length), pada .filter() kita biasanya menggunakan .push() karena kita tidak tahu di awal berapa banyak elemen yang akan lolos seleksi.

// Immutability: Sama seperti sebelumnya, kita tidak mengubah array arr asli, melainkan membuat filteredArr baru. Ini adalah praktik terbaik (best practice) dalam pengembangan Backend untuk menghindari side effects yang tidak terduga.