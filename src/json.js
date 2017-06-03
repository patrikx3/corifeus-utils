const cloneDeep = require('lodash/cloneDeep')
module.exports.clone = (obj) => {
    if (obj === null || obj === undefined) {
        return undefined
    }
    return cloneDeep(obj);
}