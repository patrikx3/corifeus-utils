const crypto = require('mz/crypto');

module.exports = async(length = 128) =>  {
    const random = await crypto.randomBytes(length);
    const string = require('./base').charset(random)
    return string;
}

