//const os = require('os');
//const process = require('process');
//const cores = os.cpus().length < 4 ? 4 : os.cpus().length;
//process.env.UV_THREADPOOL_SIZE = cores;
//console.debug(`Corifeus Utils sets UV_THREADPOOL_SIZE to ${cores} thread pool`)

module.exports = {
    lodash: require('./lodash'),
    error: require('./error'),
    process: require('./process'),
    base: require('./base'),
    random: require('./random'),
    array: require('./array'),
    string: require('./string'),
    time: require('./time'),
    object: require('./object'),
    hash: require('./hash'),
    http: require('./http'),
    childProcess: require('./child-process'),
    promise: require('./promise'),
    fs: require('./fs'),
    db: require('./db'),
    regexp: require('./regexp'),
    json: require('./json'),
    require: require('./require'),
    timer: require('./timer'),
    input: require('./input'),
    network: require('./network'),
    redis: require('./redis'),
    crypto: require('./crypto'),
    snap: require('./snap'),
}

const repeat = (count, callback) => {
    return [...Array(count).keys()].forEach(callback);
}

repeat.async = async (count, callback, serial) => {
    return await [...Array(count).keys()].forEachAsync(callback, serial);
}

module.exports.repeat = repeat;
