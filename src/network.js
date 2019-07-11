const utilsPromise = require('./promise');

module.exports.waitPort = async (options) => {
    let {
        port, host, retry, wait
    } = options
    if (port === undefined) {
        throw new Error(`${port} is undefined, please select a port like 25, 80 etc...`)
    }
    retry = retry || 8
    wait = wait || 3000
    host = host || '127.0.0.1';

    let actualRetry = 0;

    const {reject, resolve, promise} = utilsPromise.deferred();

    const checkPort = () => {

        actualRetry++;

        const net = require('net');
        const server = net.createServer();

        server.once('error', function (err) {
            if (err.code === 'EADDRINUSE') {
                // port is currently in use
                console.info(`Port ${port} in ${host} is opened`);
                server.close();
                clearInterval(interval);
                resolve();
            }
        });

        server.once('listening', function () {
            // close the server if listening doesn't fail
            console.info(`Retry ${actualRetry}, Port ${port} in ${host} is not opened`);
            server.close();

            if (actualRetry > retry) {
                reject();
            }

        });

        server.listen({
            host: 'localhost',
            port: port,
        });
    }

    const interval = setInterval(checkPort, wait)
    checkPort();

    return promise;
}
