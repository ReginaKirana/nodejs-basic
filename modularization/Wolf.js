// ================================
// Pembelajaran: Modularization
// ================================

// File ini mendefinisikan class Wolf.
// Sama seperti Tiger.js, kita akan mengekspor class agar bisa dipakai di file lain.

class Wolf {
    constructor(){
        this.strength = Math.floor(Math.random() * 100);
    }

    howl(){
        console.log('owoooo! bro what is this')
    }
}

module.exports = Wolf;