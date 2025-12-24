// ================================
// Pembelajaran: Process Object
// ================================

// Program ini menunjukkan cara menggunakan global object `process` di Node.js
// Materi yang dipelajari:
// 1. process.memoryUsage() → cek penggunaan memory Node.js
// 2. process.argv → ambil input dari command line
// 3. process.env → baca environment variable seperti NODE_ENV
// 4. Bagaimana memory berubah saat program berjalan (simulasi dengan loop)
// 5. Menampilkan informasi runtime ke console


const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i=0; i<=10000; i++){

}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);