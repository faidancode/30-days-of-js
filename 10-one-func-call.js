/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false;
    let result;
    
    return function(...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            
            // Eksekusi fungsi asli (fn) dengan context 'this' dan argumen yang diberikan
            // .apply() digunakan untuk memanggil fungsi dengan array argumen
            result = fn.apply(this, args);
            
            return result;
        } else {
            // Jika sudah pernah dipanggil sebelumnya, langsung kembalikan undefined
            // Fungsi asli (fn) tidak akan pernah dieksekusi untuk kedua kalinya
            return undefined;
        }
    }
};

/**
 * Contoh Penggunaan:
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // Output: 6 (Berhasil, fn dipanggil)
 * onceFn(2,3,6); // Output: undefined (fn tidak dipanggil lagi)
 */