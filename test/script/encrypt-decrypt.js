#!/usr/bin/env node

const utils = require('../../src');

const start = async () => {

    const pass = process.argv[2]
    const data = process.argv[3]

    console.log(`Encrypt ${data} with pass ${pass}`)

    try {
        const encrypted = await utils.crypto.encrypt({
            data: data,
            pass: pass,
        })

        console.log(`Encrypted: ${encrypted}`)

        const decrypted = await utils.crypto.decrypt({
            data: encrypted,
            pass: pass,
        })

        console.log(`Decrypted: ${decrypted}`)

    } catch (e) {
        console.error(e);
    }

}

start();
