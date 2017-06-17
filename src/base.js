const base62Charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const base36Charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

module.exports.base36Charset = base36Charset;
module.exports.base62Charset = base62Charset;

module.exports.charset = (bytes, charset = base62Charset) => {
    let string = ''
    for(let index = 0; index < bytes.length; index++) {
        const byte = bytes[index];
        const percent = (100 / 256 * byte) / 100;
        const charIndex = Math.floor(charset.length * percent) ;
        const char = charset.charAt(charIndex)
        string += char;
    }
    return string;
}


