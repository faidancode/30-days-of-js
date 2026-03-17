/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // 1. Buat array baru untuk menampung hasil transformasi
    const returnedArray = [];

    // 2. Iterasi setiap elemen dalam array input
    for (let i = 0; i < arr.length; i++) {
        // 3. Panggil fungsi 'fn' dengan elemen saat ini dan indeksnya
        // 4. Simpan hasilnya ke dalam array baru
        returnedArray[i] = fn(arr[i], i);
    }

    // 5. Kembalikan array yang sudah ditransformasi
    return returnedArray;
};