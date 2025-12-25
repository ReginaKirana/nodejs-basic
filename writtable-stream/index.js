const fs = require('fs');
const path = require('path');

// Path file input dan output
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

// Membuat readable stream dengan highWaterMark 15
const readableStream = fs.createReadStream(inputPath, { highWaterMark: 15 });

// Membuat writable stream
const writableStream = fs.createWriteStream(outputPath);

readableStream.on('data', (chunk) => {
    // Tulis chunk ke writable stream, tambahkan newline
    writableStream.write(chunk + '\n');
});

readableStream.on('end', () => {
    writableStream.end(); // tandai akhir stream
    console.log('Proses selesai! output.txt sudah dibuat.');
});

readableStream.on('error', (err) => {
    console.error('Terjadi error saat membaca file:', err.message);
});

writableStream.on('error', (err) => {
    console.error('Terjadi error saat menulis file:', err.message);
});
