const forEachAsync = (array, cb) => {
    const promises = [];
    for(let index = 0; index < array.length; index++) {
        const item = array[index];
        promises.push(cb(item))
    }
    const result = Promise.all(promises);
    result.promises = promises;
    return result;
}

module.exports = forEachAsync;