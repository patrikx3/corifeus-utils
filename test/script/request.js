#!/usr/bin/env node

const utils = require('../../src');

const init = async () => {
    try {
        const request = await utils.http.request('https://installer:CPo5pMUrLOkbhFceu7DKsGp4ee6ZOb9M@storage.ngivr.sygnus.hu/installer/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz');
        console.debug(request.body)
    } catch(e) {
        console.error(e);
    }

}
init();