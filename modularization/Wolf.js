class Wolf {
    constructor(){
        this.strength = Math.floor(Math.random() * 100);
    }

    howl(){
        console.log('owoooo! bro what is this')
    }
}

module.exports = Wolf;