const promiseUtils = require('./promise');
const os = require('os');
const fs = require('fs').promises;
const hash = require('./hash');

const path = require('path');

const wait = async (timeout) => {
    return await corySetTimeout(timeout);
}

const waitFile = async (timeout = 20000, file) => {
    const fsExtra = require('fs-extra');

    if (file === undefined) {
        file = `${os.tmpdir()}/p3x-wait-file-${path.parse(process.argv[1]).name}-${hash.string(process.argv.join())}.boot`
    }
    const exists = await fsExtra.pathExists(file);
    if (exists) {
        console.info(`${file} exists, no delay required`);
    } else {
        console.info(`${file} doesn't exist, waiting ${timeout}ms, then generate ${file}`);
        await wait(timeout);
        console.info(`${file} now exists`);
    }
    await fs.writeFile(file, String(Date.now()));
    return {
        timeout: timeout,
        file: file,
        exists: exists,
    }
}

const corySetTimeout = async (cb, timeout) => {
    if (timeout === undefined) {
        timeout = cb;
        cb = () => {
        };
    }
    const {resolve, reject, promise} = promiseUtils.deferred();

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

const corySetInterval = async (cb, timeout) => {
    const {resolve, reject, promise} = promiseUtils.deferred();

    promise.timer = setInterval(async () => {
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
module.exports.waitFile = waitFile;
module.exports.setTimeout = corySetTimeout;
module.exports.setInterval = corySetInterval;


