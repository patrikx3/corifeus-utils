module.exports.clone = (obj) => {
    if (obj === null || obj === undefined) {
        return undefined
    }
    return Object.assign({}, obj);
}