const url = require('url');

const coryRequest = (options) => {

    if (typeof (options) === 'string') {
        options = {
            url: options,
        }
    }
    const originalOptions = Object.assign({}, options)
    /*
     https://nodejs.org/api/http.html#http_http_request_options_callback
     */
    const parsedUrl = url.parse(options.url);
    let request;
    if (parsedUrl.protocol === 'https:') {
        request = require('https').request;
        if (parsedUrl.port === null) {
            parsedUrl.port = 443;
        }
    } else if (parsedUrl.protocol === 'http:') {
        request = require('http').request;
        if (parsedUrl.port === null) {
            parsedUrl.port = 80;
        }
    } else {
        throw new Error(`Unknown protocol ${parsedUrl.protocol}`);
    }
    options.protocol = parsedUrl.protocol;
    options.port = parsedUrl.port;
    options.host = parsedUrl.host;
    options.hostname = parsedUrl.hostname;
    options.path = parsedUrl.path;

    let body;
    options.headers = options.headers || {};
    if (options.body !== undefined) {
        if (typeof (options.body) === 'object') {
            body = JSON.stringify(options.body);

            if (!options.headers.hasOwnProperty('Content-Type')) {
                options.headers['Content-Type'] = 'application/json; charset=utf-8'
                options.headers['Content-Length'] = Buffer.byteLength(body)
            }
        }
    }

    if (!options.headers.hasOwnProperty('User-Agent')) {
        options.headers['User-Agent'] = 'Corifeus-Utils-Request BOT';
    }
    if (!options.hasOwnProperty('method')) {
        options.method = 'GET';
    }

    const urlParsed = new url.URL(options.url)

    /*
    console.log(!options.headers.hasOwnProperty('Authorization'))
    console.log(!options.headers.hasOwnProperty('authorization'))
    console.log(urlParsed.username )
    console.log(urlParsed.password)
    */

    if ((!options.headers.hasOwnProperty('Authorization') || !options.headers.hasOwnProperty('authorization')) && (urlParsed.username !== '' || urlParsed.password !== '')) {
        const auth = `Basic ${Buffer.from((urlParsed.username || '') + ':' + (urlParsed.password || '')).toString('base64')}`;
        options.headers['Authorization'] = auth;
    }

    /*
    console.log(urlParsed)
    console.log(options)
    */

    const promise = new Promise((resolve, reject) => {

        try {
            const req = request(options, (response) => {
                if (response.headers.hasOwnProperty('location')) {
                    req.end();
                    originalOptions.url = response.headers.location;
                    return resolve(coryRequest(originalOptions));
                }

                if (options.hasOwnProperty('pipe') && options.pipe === true) {
                    resolve(response);
                    return;
                }

                response.setEncoding('utf8');
                let rawData = '';
                response.on('data', (chunk) => {
                    rawData += chunk;
                });
                response.on('end', () => {
                    try {
                        if (response.headers.hasOwnProperty('content-type') && response.headers['content-type'].startsWith('application/json') && options.raw !== true) {
                            if (typeof rawData !== 'undefined' && rawData !== '') {
                                const parsedData = JSON.parse(rawData);
                                response.body = parsedData;
                            } else {
                                response.body = {};
                            }
                        } else {
                            response.body = rawData;
                        }
                        resolve(response);
                    } catch (e) {
                        e.requestRawText = rawData
                        reject(e);
                    }
                });
            })
            req.on('error', reject);
            if (body !== undefined) {
                req.write(body);
            }
            req.end();
        } catch (e) {
            console.error(e);
            reject(e);
        }
    })
    return promise;
}

module.exports = coryRequest;
