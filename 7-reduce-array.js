/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // 1. Inisialisasi 'val' dengan nilai awal (init)
    let val = init;

    // 2. Iterasi setiap elemen dalam array
    for (let i = 0; i < nums.length; i++) {
        // 3. Update 'val' dengan hasil dari fungsi pereduksi (fn)
        // fn menerima 'val' saat ini (accumulator) dan elemen array (current)
        val = fn(val, nums[i]);
    }

    // 4. Setelah semua elemen diproses, kembalikan nilai akhirnya
    return val;
};

// Accumulator Pattern: Konsep menyimpan hasil perhitungan sementara (val) sangat sering digunakan saat mengolah data transaksi atau agregasi laporan di backend.
// Fleksibilitas: Berbeda dengan map yang hasilnya pasti array, reduce bisa menghasilkan apa saja. Contoh di dunia nyata: Mengubah array user dari database menjadi sebuah object (Map) agar pencarian ID lebih cepat ($O(1)$).
// Sequential Execution: reduce menjamin urutan eksekusi dari indeks 0 ke n. Ini penting jika hasil perhitungan langkah kedua bergantung pada langkah pertama.