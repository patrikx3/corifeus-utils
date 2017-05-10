if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

module.exports.empty = (spec) => {
    spec = String(spec).trim();
    return spec === undefined || spec === '' || spec === 'undefined'
}


module.exports.inject = (str, options) => {

    const findPrefix = str.indexOf(options.prefix);
    const postixIndex = str.indexOf(options.postfix);
    if (findPrefix == -1 && postixIndex == -1 && !options.header && !options.footer) {
        return;
    }

    if (findPrefix == -1 && postixIndex == -1 ) {
        let replaceText = options.prefix + '\n' + options.replace + '\n' + options.postfix;
        if (options.header) {
            str = replaceText + '\n' +str;
        } else {
            str += '\n' + replaceText;
        }
    } else {
        const prefixIndex =  findPrefix + options.prefix.length;
        str = str.substring(0, prefixIndex) + '\n' + options.replace + '\n' + str.substring(postixIndex);
    }
    return str;
}
