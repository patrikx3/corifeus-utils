try {
    const _ = require('lodash');

    _.mixin({ 'pascalCase': _.flow(_.camelCase, _.upperFirst) });

    _.dotCase = (name) => {
        return _.snakeCase(name).replace(/_/g, '.');
    }

    module.exports = _;
} catch(e) {
    console.warn('corifeus-utils warn: looks like lodash is not in you dependecies')
}
