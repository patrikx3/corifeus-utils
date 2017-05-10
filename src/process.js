process.on("unhandledRejection", (err, promise) => {
    if (process.listeners('unhandledRejection').length > 1) {
        return;
    }
    console.error(new Date().toLocaleString(), 'unhandledRejection', err, promise);
    process.exit(1);
});

process.on('uncaughtException', function (err) {
    if (process.listeners('uncaughtException').length > 1) {
        return;
    }
    console.error(new Date().toLocaleString(), 'uncaughtException', err);
    process.exit(1);
});

module.exports.writableCallbackExit = (callback) => {
    process.on('exit', function () {
        if (!this.stdin._writableState.ended) {
            callback(this.stdin)
        }
    });
}