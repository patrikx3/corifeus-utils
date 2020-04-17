const escape = function (s) {
    return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
};

if (!RegExp.escape) {
    RegExp.escape = escape;
}

module.exports.escape = escape;
