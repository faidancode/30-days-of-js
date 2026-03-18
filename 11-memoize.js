/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // Inisialisasi cache menggunakan Map (lebih efisien daripada Object biasa untuk key-value)
    // Map akan menyimpan 'string argumen' sebagai key dan 'hasil fungsi' sebagai value
    const cache = new Map();

    return function(...args) {
        // Ubah array argumen menjadi string unik agar bisa dijadikan key di Map
        // Contoh: [2, 2] menjadi "2,2"
        const key = JSON.stringify(args);

        // Cek apakah key tersebut sudah ada di dalam cache
        if (cache.has(key)) {
            // Jika ada, langsung kembalikan nilai dari cache tanpa memanggil fungsi asli (fn)
            return cache.get(key);
        }

        // Jika tidak ada di cache, panggil fungsi asli (fn) dengan argumen yang diberikan
        const result = fn(...args);

        // Simpan hasil eksekusi ke dalam cache untuk penggunaan di masa depan
        cache.set(key, result);

        // Kembalikan hasil eksekusi
        return result;
    }
}

/** * Contoh Penggunaan:
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 * return a + b;
 * })
 * * memoizedFn(2, 2) // 4 (fn dipanggil, callCount = 1)
 * memoizedFn(2, 2) // 4 (diambil dari cache, fn TIDAK dipanggil, callCount tetap 1)
 * console.log(callCount) // 1 
 */