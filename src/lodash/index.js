const _ = require('lodash');

_.mixin({ 'pascalCase': _.flow(_.camelCase, _.upperFirst) });

_.dotCase = (name) => {
    return _.snakeCase(name).replace(/_/g, '.');
}

module.exports = _;