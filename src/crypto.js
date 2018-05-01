const crypto = require('crypto');
const defaultAlgorithm = 'aes256';

const encrypt = (options) => {

    return new Promise((resolve, reject) => {
        const { data, pass } = options;
        let { algorithm } = options;
        if (algorithm === undefined) {
            algorithm = defaultAlgorithm;
        }

        const cipher = crypto.createCipheriv(algorithm, pass)

        let encrypted = '';
        cipher.on('readable', () => {
            const ondata = cipher.read();
            if (ondata) {
                encrypted += ondata.toString('hex');
            }
        });
        cipher.on('end', () => {
            resolve(encrypted);
        });

        cipher.write(data);
        cipher.end();
    })

}

const decrypt = (options) => {
    return new Promise((resolve, reject) => {
        const { data, pass  } = options;
        let { algorithm } = options;
        if (algorithm === undefined) {
            algorithm = defaultAlgorithm;
        }
        const decipher = crypto.createDecipher(algorithm, pass)

        let decrypted = '';
        decipher.on('readable', () => {
            const ondata = decipher.read();
            if (ondata) {
                decrypted += ondata.toString('utf8');
            }
        });
        decipher.on('end', () => {
            resolve(decrypted);
        });
        decipher.write(data, 'hex');
        decipher.end();
    })
}

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;