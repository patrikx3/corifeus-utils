module.exports.clone = (obj) => {
    let cloneDeep

    try {
        cloneDeep = require('lodash/cloneDeep')
    } catch (e) {
        console.warn('corifeus-utils warn: looks like lodash is not in your dependencies')
        throw e
    }
    if (obj === null || obj === undefined) {
        return undefined
    }
    return cloneDeep(obj);
}