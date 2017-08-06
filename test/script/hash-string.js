#!/usr/bin/env node

const utils = require('../../src');

const start = async() => {

    const hash = await utils.hash.string(process.argv[2]);
    console.log(hash);

    if (process.argv[3] === 'delay') {
        await utils.timer.waitFile();
        return;
    }

}

start();