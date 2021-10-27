const childProcess = require('child_process');
const promiseUtil = require('../promise');

module.exports.exec = (command, options) => {
    if (options === true) {
        options = {
            display: true
        }
    }
    options = options || {};
    options.stdio = options.stdio || 'inherit';
    options.stdin = options.stdin || 'inherit';

    options.display = options.display || false;

    const {resolve, reject, promise} = promiseUtil.deferred();
    const run = childProcess.exec(command, options, (err, stdout, stderr) => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            stdout: stdout,
            stderr: stderr,
        })
    })

    if (options.display === true) {
        run.stdout.pipe(process.stdout)
        run.stderr.pipe(process.stderr)
    }

    promise.exec = run;
    return promise
}
