try {
    const _ = require('lodash');

    _.mixin({'pascalCase': _.flow(_.camelCase, _.upperFirst)});

    _.dotCase = (name) => {
        return _.snakeCase(name).replace(/_/g, '.');
    }

    const originalIsEmpty = _.isEmpty
    _.isEmpty = (value) => {
        const originalResult = originalIsEmpty(value)
        if (originalResult && value) {
            const objectSymbols = Object.getOwnPropertySymbols(value);
            return objectSymbols.length === 0
        }
        return originalResult
    }

    module.exports = _;
} catch (e) {
    console.warn('corifeus-utils warn: looks like lodash is not in you dependecies')
}
