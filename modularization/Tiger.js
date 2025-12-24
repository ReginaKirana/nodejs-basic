// ================================
// Pembelajaran: Modularization
// ================================

// File ini mendefinisikan class Tiger.
// Kita belajar bagaimana menulis modul lokal di Node.js
// dan mengekspor class agar bisa digunakan di file lain.

class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        console.log('grrrrr! *bro kinda weird actually')
    }
}

// TODO 1: Ekspor class Tiger agar bisa digunakan di file lain
module.exports = Tiger;