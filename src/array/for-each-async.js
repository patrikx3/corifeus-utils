const forEachAsync = (array, cb, serial = false) => {
    const promises = [];
    let lastCb;
    for(let index = 0; index < array.length; index++) {
        const item = array[index];
        if (serial) {
            if (lastCb === undefined) {
                lastCb = cb(item);
            } else {
                lastCb = lastCb.then(() => cb(item));
            }
        } else {
            promises.push(cb(item))
        }
    }
    if (serial) {
        return lastCb;
    } else {
        const result = Promise.all(promises);
        result.promises = promises;
        return result;
    }
}

module.exports = forEachAsync;