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

module.exports.isPortReachable = async (port, {timeout = 1000, host} = {}) => {
    const net = require('net');
    const promise = new Promise(((resolve, reject) => {
        const socket = new net.Socket();

        const onError = () => {
            socket.destroy();
            reject();
        };

        socket.setTimeout(timeout);
        socket.once('error', onError);
        socket.once('timeout', onError);

        socket.connect(port, host, () => {
            socket.end();
            resolve();
        });
    }));

    try {
        await promise;
        return true;
    } catch (_) {
        return false;
    }
};

'use strict';
const net = require('net');
const os = require('os');

class Locked extends Error {
    constructor(port) {
        super(`${port} is locked`);
    }
}

const lockedPorts = {
    old: new Set(),
    young: new Set()
};

// On this interval, the old locked ports are discarded,
// the young locked ports are moved to old locked ports,
// and a new young set for locked ports are created.
const releaseOldLockedPortsIntervalMs = 1000 * 15;

// Lazily create interval on first use
let interval;

const getLocalHosts = () => {
    const interfaces = os.networkInterfaces();
    // Add undefined value for createServer function to use default host,
    // and default IPv4 host in case createServer defaults to IPv6.
    const results = new Set([undefined, '0.0.0.0']);

    for (const _interface of Object.values(interfaces)) {
        for (const config of _interface) {
            results.add(config.address);
        }
    }

    return results;
};

const checkAvailablePort = options =>
    new Promise((resolve, reject) => {
        const server = net.createServer();
        server.unref();
        server.on('error', reject);
        server.listen(options, () => {
            const {port} = server.address();
            server.close(() => {
                resolve(port);
            });
        });
    });

const getAvailablePort = async (options, hosts) => {
    if (options.host || options.port === 0) {
        return checkAvailablePort(options);
    }

    for (const host of hosts) {
        try {
            await checkAvailablePort({port: options.port, host}); // eslint-disable-line no-await-in-loop
        } catch (error) {
            if (!['EADDRNOTAVAIL', 'EINVAL'].includes(error.code)) {
                throw error;
            }
        }
    }

    return options.port;
};

const portCheckSequence = function * (ports) {
    if (ports) {
        yield * ports;
    }

    yield 0; // Fall back to 0 if anything else failed
};

module.exports.getPort = async options => {
    let ports;

    if (options) {
        ports = typeof options.port === 'number' ? [options.port] : options.port;
    }

    if (interval === undefined) {
        interval = setInterval(() => {
            lockedPorts.old = lockedPorts.young;
            lockedPorts.young = new Set();
        }, releaseOldLockedPortsIntervalMs);

        // Does not exist in some environments (Electron, Jest jsdom env, browser, etc).
        if (interval.unref) {
            interval.unref();
        }
    }

    const hosts = getLocalHosts();

    for (const port of portCheckSequence(ports)) {
        try {
            let availablePort = await getAvailablePort({...options, port}, hosts); // eslint-disable-line no-await-in-loop
            while (lockedPorts.old.has(availablePort) || lockedPorts.young.has(availablePort)) {
                if (port !== 0) {
                    throw new Locked(port);
                }

                availablePort = await getAvailablePort({...options, port}, hosts); // eslint-disable-line no-await-in-loop
            }

            lockedPorts.young.add(availablePort);
            return availablePort;
        } catch (error) {
            if (!['EADDRINUSE', 'EACCES'].includes(error.code) && !(error instanceof Locked)) {
                throw error;
            }
        }
    }

    throw new Error('No available ports found');
};

module.exports.makeRange = (from, to) => {
    if (!Number.isInteger(from) || !Number.isInteger(to)) {
        throw new TypeError('`from` and `to` must be integer numbers');
    }

    if (from < 1024 || from > 65535) {
        throw new RangeError('`from` must be between 1024 and 65535');
    }

    if (to < 1024 || to > 65536) {
        throw new RangeError('`to` must be between 1024 and 65536');
    }

    if (to < from) {
        throw new RangeError('`to` must be greater than or equal to `from`');
    }

    const generator = function * (from, to) {
        for (let port = from; port <= to; port++) {
            yield port;
        }
    };

    return generator(from, to);
};
