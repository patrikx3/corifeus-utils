#!/usr/bin/env node

const utls = require('../../src');

const start = async () => {
    await utls.network.waitPort({
        port: 6379,
        hostname: '127.0.0.1',
    })
}

start();