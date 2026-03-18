/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // Jika array fungsi kosong, kembalikan fungsi identitas
    // Fungsi ini hanya mengembalikan nilai input tanpa perubahan
    if (functions.length == 0) {
        return function(x) {
            return x;
        }
    }
    
    // Mengembalikan fungsi baru yang akan menerima input 'x'
    return function(x) {
        // 'result' menyimpan nilai sementara selama proses komposisi
        let result = x;

        // Iterasi array dari indeks terakhir ke awal (kanan ke kiri)
        // Ini sesuai standar matematika f(g(h(x))) di mana h(x) berjalan lebih dulu
        for (let i = functions.length - 1; i >= 0; i--) {
            // Panggil fungsi pada indeks i dengan hasil dari fungsi sebelumnya
            // Lalu update variabel 'result' dengan hasil yang baru
            // functions[i]: Mengambil satu fungsi dari array (misal: x => x + 1).
            // (result): Memasukkan nilai result saat ini ke dalam fungsi tersebut.
            result = functions[i](result);
        }

        // Kembalikan hasil akhir setelah melewati semua fungsi
        return result;
    }
};

/**
 * Contoh Eksekusi:
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) 
 * 1. Iterasi pertama (kanan): 2 * 4 = 8
 * 2. Iterasi kedua (kiri): 8 + 1 = 9
 * Hasil: 9
 */