const ms = require('ms');
const timestring = require('timestring');

module.exports.span = (spec) => {
    let result = timestring(spec);
    if (typeof (result) === 'number') {
        result = result * 1000;
    }
    return result;
}

module.exports.msParse = (ms) => {
    if (typeof ms !== 'number') {
        throw new TypeError('Expected a number');
    }

    var roundTowardZero = ms > 0 ? Math.floor : Math.ceil;

    return {
        days: roundTowardZero(ms / 86400000),
        hours: roundTowardZero(ms / 3600000) % 24,
        minutes: roundTowardZero(ms / 60000) % 60,
        seconds: roundTowardZero(ms / 1000) % 60,
        milliseconds: roundTowardZero(ms) % 1000
    };
};

module.exports.verbose = (timestamp, started) => {
    if (timestamp === undefined) {
        return undefined;
    }
    const leftMs = timestamp - Date.now();
    return {
        left: ms(leftMs),
        leftMs: leftMs,
        end: new Date(timestamp).toLocaleString(),
        start: new Date(started).toLocaleString(),
        startstamp: started,
        timestamp: timestamp,
    }
}
