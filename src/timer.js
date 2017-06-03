const promiseUtils = require('./promise');

const wait = async(timeout) => {
    return await corySetTimeout(timeout);
}

const corySetTimeout = async (cb, timeout) => {
    if (timeout === undefined) {
        timeout = cb;
        cb = () => {};
    }
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

const corySetInterval = async(cb, timeout) => {
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

module.exports.wait = wait;
module.exports.setTimeout = corySetTimeout;
module.exports.setInterval = corySetInterval ;