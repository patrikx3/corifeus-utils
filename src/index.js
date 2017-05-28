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
}

const repeat = (count, callback) => {
    return [...Array(count).keys()].forEach(callback);
}

repeat.async = async (count, callback, serial) => {
    return await [...Array(count).keys()].forEachAsync(callback, serial);
}

module.exports.repeat = repeat;