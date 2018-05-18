const fs = require('fs');
const crypto = require('crypto');

const fileHash = async (file, cryptoName = 'sha256') => {
    return new Promise((resolve, reject) => {
        const fstream = fs.createReadStream(file);
        const hash = crypto.createHash(cryptoName);
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


const stringHash = (string, cryptoName = 'sha256') => {
    return crypto.createHash(cryptoName).update(string).digest("hex");
}

module.exports.string= stringHash;

module.exports.file = fileHash;
