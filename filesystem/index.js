const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, 'notes.txt');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 

fs.readFile(filepath, 'UTF-8', fileReadCallback);