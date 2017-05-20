const escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

if (!RegExp.escape) {
    RegExp.escape = escape;
}

module.exports.escape = escape;