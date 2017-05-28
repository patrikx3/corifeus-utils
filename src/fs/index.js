const fs = require('fs');
const mz = require('mz');
const path = require('path');
const fsExtra = require('fs-extra');

const ensureDir = async (dir) => {
    const exists = await mz.fs.exists(dir);
    if (exists) {
        return;
    }
    await mz.fs.mkdir(dir);
}

const ensureFile = async(file, defaultData = '') => {
    const exists = await mz.fs.exists(file);
    if (exists) {
        return true;
    }
    if (typeof(defaultData) === 'object') {
        defaultData = JSON.stringify(defaultData);
    }

    await fsExtra.ensureDir(path.dirname(file));
    await mz.fs.writeFile(file, defaultData)
    return false;
}

module.exports.ensureFile = ensureFile;
module.exports.ensureDir = ensureDir;
module.exports.find = require('./find');