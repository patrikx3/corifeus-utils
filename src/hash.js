const fs = require('fs');
const crypto = require('crypto');

const fileHash = (file, cryptoName = 'sha256', key = 'corifeus-hash-unsecure') => {
    return new Promise((resolve, reject) => {
        const fstream = fs.createReadStream(file);
        const hash = crypto.createHash(cryptoName, key);
        fstream.on('error', reject);
        fstream.on('end', function() {
            hash.end();
            const bytes = hash.read();
            const string = require('./base').charset(bytes)
            resolve(string);
        });
        fstream.pipe(hash);
    })
}

module.exports.file = fileHash;
