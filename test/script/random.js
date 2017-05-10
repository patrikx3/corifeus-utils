#!/usr/bin/env node

const utils = require('../../src');

const start = async() => {

    const random = await utils.random(128);
    console.log(random);
}

start();