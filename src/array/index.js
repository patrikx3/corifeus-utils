module.exports.forEachAsync = require('./for-each-async');

module.exports.isfy = (input) => {
    const args = Array.prototype.slice.call(input);
    return args.sort();
}

if (!Array.prototype.forEachAsync) {
    const forEachAsync = module.exports.forEachAsync;

    Object.defineProperty(Array.prototype, 'forEachAsync', {
        enumerable: false,
        writable: true,
        value: function (callback, serial = false) {
            return forEachAsync(this, callback, serial);
        }
    });

}
