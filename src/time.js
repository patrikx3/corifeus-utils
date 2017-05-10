const ms = require('ms');
const timestring = require('timestring');

module.exports.span = (spec) => {
    let result = timestring(spec);
    if (typeof(result) === 'number') {
        result = result * 1000;
    }
    return result;
}

module.exports.verbose = (timestamp, started = Date.now()) => {
    if (timestamp === undefined) {
        return undefined;
    }
    return {
        left: ms(timestamp - started),
        end: new Date(timestamp).toLocaleString(),
        start: new Date(started).toLocaleString(),
        startstamp: started,
        timestamp: timestamp,
    }
}