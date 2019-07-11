module.exports.deferred = () => {
    let resolver, rejecter;
    const promise = new Promise((resolve, reject) => {
        resolver = resolve, rejecter = reject
    })
    return {
        resolve: resolver,
        reject: rejecter,
        promise: promise,
    }
}
