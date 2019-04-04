#!/usr/bin/env node

const utils = require('../../src');

const init = async () => {
    try {
        const request = await utils.http.request({
            // https://installer:titkos-kod@storage.ngivr.sygnus.hu/installer/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz
            url: 'https://server.patrikx3.com/api/core/util/random/32',
            raw: true,
        });
        console.debug(request.body)
    } catch(e) {
        console.error(e);
    }

}
init();
