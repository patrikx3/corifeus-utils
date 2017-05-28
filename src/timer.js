const promiseUtils = require('./promise');

module.exports.setTimeout = async (cb, timeout) => {
    const { resolve, reject, promise} = promiseUtils.deferred();

    promise.timer = setTimeout(async () => {
        try {
            await cb();
            resolve();
        } catch (e) {
            reject(e);
        }
    }, timeout)

    return promise;
}

module.exports.setInterval = async(cb, timeout) => {
    const { resolve, reject, promise} = promiseUtils.deferred();

    promise.timer = setInterval(async() => {
        try {
            await cb();
            resolve();
        } catch (e) {
            reject(e);
        }

    }, timeout)

    return promise;
}