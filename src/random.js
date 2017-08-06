const crypto = require('mz/crypto');

module.exports = async(length = 128) =>  {
    const random = await crypto.randomBytes(length);
    const string = require('./base').charset(random)
    return string;
}

module.exports.timeBase = async(length = 128) => {
    let random = await module.exports (length)
    return `${Date.now()}${random}`;
}

module.exports.integer = (min = 0, max = Int.MAX_INTEGER) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.lower = async(length = 16) => {
    const random = await crypto.randomBytes(length);
    const base = require('./base');
    const string = base.charset(random, base.base36Charset)
    return string;
}