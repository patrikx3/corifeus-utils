#!/usr/bin/env node
const utils = require('../../src');
console.log(new Date(utils.time.lastDay(0)).toLocaleString());
console.log(new Date(utils.time.lastDay(1)).toLocaleString());
console.log(new Date(utils.time.lastDay(2)).toLocaleString());
console.log(new Date(utils.time.lastDay(3)).toLocaleString());
console.log(new Date(utils.time.lastDay(4)).toLocaleString());
console.log(new Date(utils.time.lastDay(5)).toLocaleString());
console.log(new Date(utils.time.lastDay(6)).toLocaleString());
