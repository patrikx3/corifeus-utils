#!/usr/bin/env node

const utils = require('../../src');

const start = async () => {

    const hash = await utils.hash.file('./package.json');
    console.log(hash);
}

start();
