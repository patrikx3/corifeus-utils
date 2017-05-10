const forEachAsync = async (array, cb) => {
    for(let index = 0; index < array.length; index++) {
        const item = array[index];
        await cb(item)
    }
}

module.exports = forEachAsync;