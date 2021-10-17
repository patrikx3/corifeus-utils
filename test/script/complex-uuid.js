const utils = require('../../src');

const uuid = require('uuid');

console.log('corifeus-utils complex uuid', utils.random.complexUuid())
console.log('v1', uuid.v1())
console.log('v4', uuid.v4())
