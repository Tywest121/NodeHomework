const fs= require('fs');

const readStream=fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStreams=fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', chunk => {
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStreams.write('.\nNEW CHUNK:\n');
//     writeStreams.write(chunk);
// });


readStream.pipe(writeStreams);