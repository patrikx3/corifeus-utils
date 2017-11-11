module.exports.parseUrl = (redisUrlInput) => {
    const url = require('url');
    const redisUrl = new url.URL(redisUrlInput);
    const redisObject = {
        "password": redisUrl.password,
        "port": redisUrl.port || 6379,
        "host": redisUrl.hostname,
        "db": redisUrl.pathname.length > 1 ? parseInt(redisUrl.pathname.substr(1)) : 0,
    };
    return redisObject;
}