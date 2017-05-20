#!/usr/bin/env node

const utils = require('../../src');

const obj = {
    a: 1,
    b: 2,
}

const obj2 = utils.json.clone(obj);
obj.a = 2;

console.log(obj2)