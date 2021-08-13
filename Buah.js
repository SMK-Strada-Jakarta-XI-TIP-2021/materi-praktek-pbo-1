class Buah {
    constructor(nama, warna, beratGram, harga) {
        this.nama = nama;
        this.warna = warna;
        this.beratGram = beratGram;
        this.harga = harga;
        this.kondisiBagus = false;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

// Cara membuat object instance

let buahApel = new Buah("Apel", "Merah", 100, 15000);
buahApel.cekKondisiBagus(true);
console.log(buahApel);
let buahNanas = new Buah("Nanas", "Kuning", 200, 10000);
buahNanas.cekKondisiBagus();
console.log(buahNanas);

console.log('ini buah apel =>', buahApel);
console.log('ini buah nanas =>', buahNanas);