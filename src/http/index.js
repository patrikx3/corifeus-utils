const url = require('url');

module.exports.request = (options) => {

    if (typeof(options) === 'string') {
        options = {
            url: options,
            method: 'GET',
        }
    }
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
    if (options.body !== undefined) {
        if (typeof(options.body) === 'object') {
            body = JSON.stringify(options.body);

            options.headers = options.headers || {};
            if (!options.headers.hasOwnProperty('Content-Type')) {
                options.headers['Content-Type'] = 'application/json; charset=utf-8'
                options.headers['Content-Length'] = Buffer.byteLength(body)
            }
        }
    }

    return new Promise((resolve, reject) => {
        const req = request(options, (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    if (res.headers.hasOwnProperty('content-type') &&  res.headers['content-type'].startsWith('application/json')) {
                        const parsedData = JSON.parse(rawData);
                        res.body = parsedData;
                    } else {
                        res.body = rawData;
                    }
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            });
        })
        req.on('error', reject);
        if (body !== undefined) {
            req.write(body);
        }
        req.end();
    })
}