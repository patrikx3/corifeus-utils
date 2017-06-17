const coryFs = require('../fs');
const mz = require('mz');

const load = async (dbFile, data = {}) => {
    const exists = await coryFs.ensureFile(dbFile, data)
    if (exists) {
        data = await mz.fs.readFile(dbFile);
    }
    data = JSON.parse(data.toString());
    return new db(dbFile, data);
}

const db =  function(dbFile, data) {
    const getTime = () => {
        return Date.now();
    }

    if (!data.hasOwnProperty('_createdAt')) {
        data._createdAt = getTime();
        data._updatedAt = getTime();
    }

    Object.defineProperty(this, 'raw', {
        get: () => {
            return data;
        }
    })

    this.exists = function(entity, key) {
        if (!data.hasOwnProperty(entity)) {
            return false;
        }
        if (!data[entity].hasOwnProperty(key)) {
            return false;
        }
        return true;
    }

    this.save = function(entity, key, saveData) {
        if (!data.hasOwnProperty(entity)) {
            data[entity] = {};
        }
        if (data[entity].hasOwnProperty(key)) {
            saveData._updatedAt = getTime();
            data[entity][key] = Object.assign(data[entity][key], saveData);
        } else {
            saveData._createdAt = getTime();
            saveData._updatedAt = getTime();
            data[entity][key] = saveData;
        }
    }

    this.write = async function() {
        data._updatedAt = getTime();
        await mz.fs.writeFile(dbFile, JSON.stringify(data, null, 4));
    }
}

module.exports.load = load;