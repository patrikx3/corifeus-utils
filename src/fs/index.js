const fs = require('fs');
const mz = require('mz');
const path = require('path');
const fsExtra = require('fs-extra');
const os = require('os');
const tmp = os.tmpdir();

const random = require('../random');

const ensureDir = async (dir) => {
    const exists = await mz.fs.exists(dir);
    if (exists) {
        return;
    }
    await fsExtra.ensureDir(dir);
}

const ensureFile = async(file, defaultData = '', alwaysWrite = false) => {
    const exists = await mz.fs.exists(file);
    if (exists && !alwaysWrite) {
        return true;
    }
    if (typeof(defaultData) === 'object') {
        defaultData = JSON.stringify(defaultData);
    }

    await fsExtra.ensureDir(path.dirname(file));
    await mz.fs.writeFile(file, defaultData)
    return false;
}

const createWriteStream = (filename) => {
    const stream = fs.createWriteStream(filename);

    const promise = new Promise((resolve, reject) => {
        stream.on('finish', async() => {
            resolve();
        });

        stream.on('error', (error) => {
            reject(error);
        });

    })
    promise.stream = stream;
    return promise;
}

const tempFileName = async (extension = 'tmp') => {
    const randomFile = 'tmp-' + Date.now() +'-' + await random.lower();
    const randomFileFinal = `${tmp}/${randomFile}.${extension}`
    if (await mz.fs.exists(randomFileFinal)) {
        return await tempFileName(extension);
    }
    return randomFileFinal;
}

const ensureTempFile = async (data, extension = 'tmp') => {
    const randomFileFinal = await tempFileName(extension);
    await mz.fs.writeFile(randomFileFinal, data);
    return randomFileFinal;
}

module.exports.ensureFile = ensureFile;
module.exports.ensureDir = ensureDir;
module.exports.find = require('./find');
module.exports.ensureTempFile = ensureTempFile;
module.exports.tempFileName = tempFileName;

module.exports.createWriteStream = createWriteStream;