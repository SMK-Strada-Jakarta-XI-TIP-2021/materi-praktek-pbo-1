// Membuat object literal

let buah = {
    nama: "Apel",
    warna: "merah",
    beratGram: 50,
    bagus: true,
    harga: 10000,
    cekHarga: function () {
       return this.nama + ' ini ' + 'harganya ' + this.harga + ' dengan berat ' + this.beratGram;
    }
};

console.log(buah);
console.log(buah.warna);
console.log(buah.nama);
console.log(buah.cekHarga());

let cekHargaBuah = buah.cekHarga();

console.log('ini cek harga buah ===>', cekHargaBuah );