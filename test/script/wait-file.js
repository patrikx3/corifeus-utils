#!/usr/bin/env node

const utils = require('../../src');

const start = async() => {

    if (process.argv[2] === 'delay') {
        await utils.timer.waitFile();
        return;
    }

}

start();