const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'article.txt');

const readableStream = fs.createReadStream(filePath, {
  highWaterMark: 10
});

readableStream.on('readable', () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // error akan ditangani di event 'error'
  }
});

readableStream.on('end', () => {
  console.log('\nDone');
});
