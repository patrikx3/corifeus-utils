module.exports.forEachAsync = require('./for-each-async');

if (!Array.prototype.forEachAsync) {
    const forEachAsync = module.exports.forEachAsync;

    Object.defineProperty(Array.prototype, 'forEachAsync', {
        enumerable: false,
        writable: true,
        value: async function(callback) {
            await forEachAsync(this, callback);
        }
    });

}

