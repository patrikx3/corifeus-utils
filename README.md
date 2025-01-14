[//]: #@corifeus-header

 [![NPM](https://img.shields.io/npm/v/corifeus-utils.svg)](https://www.npmjs.com/package/corifeus-utils)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://stats.uptimerobot.com/9ggnzcWrw)



---
# ❤️ Corifeus Utils v2025.4.105



**Bugs are evident™ - MATRIX️**
    



### NodeJS LTS is supported

### Built on NodeJs version

```txt
v22.13.0
```





# Description

                        
[//]: #@corifeus-header:end

Misc utils (async array iterator, random characters, exit on silent ```unhandledRejection``` errors, etc...)

```js
const utils = require('corifeus-utils');
```

* Modules
  * Async Array Iterator ```forEachAsync```
  * ```JSON.strintify``` for ```Error```
  * Lodash Pascal
  * Lodash patch to work `_.isEmpty` with `Symbols`
  * Remove silent process ```unhandledRejection``` end ```process.exit()```, adds timestamp
  * Process ```uncaughtException``` that shows timestamp.
  * Random async Base62 string
  * Replace inject - finds a prefix and postfix in a string and replace the content, ```strings.inject```
  * Convert a byte array or string to base62, ```utils.base.charset(string)```
  * Async Hash (SHA-512, SHA-256) file using Base62,
  * Promise based HTTP Request
  * Time utilies
  * Additional file system utils
  * JSON based file database
  * HTTP/HTTPS based async/Promise request
  
# Actual modules

Everything is promise based.  

* time
  * verbose
  * span
* regexp
  * escape
* random
  * async (default is base62)
  * complexUuid
* promise
  * deferred (simple extract the reject, resolve and promise function, instead of callback)
* process
  * unhandledRejection
  * uncaughtException
  * writableCallbackExit
* object
  * reduce
* hash
  * async file
* string
  * padStart
  * empty
  * inject
* lodash
  * PascalCase
  * isEmpty
* http
  * async request
* db
  * file based json storage
* child-process
  * async exec
* array
  * forEachAsync, async/await for each
* network
  * isPortReachable
  * makeRange
  * getPort
* fs
  * ensureFile
  * ensureDir
  * find
  * ensureTempFile
  * tempFileName
  * readdirRecursive
  * createWriteStream
* crypto
  * encrypt
  * decrypt
* error
  * default `Error` has `toJSON` method
* timer
  
[//]: #@corifeus-footer

---


## Quick and Affordable Web Development Services

If you want to quickly and affordably develop your next digital project, visit [corifeus.hu](https://corifeus.hu) for expert solutions tailored to your needs.

---

## Powerful Online Networking Tool  

Discover the powerful and free online networking tool at [network.corifeus.com](https://network.corifeus.com).  

**Free**  
Designed for professionals and enthusiasts, this tool provides essential features for network analysis, troubleshooting, and management.  
Additionally, it offers tools for:  
- Monitoring TCP, HTTP, and Ping to ensure optimal network performance and reliability.  
- Status page management to track uptime, performance, and incidents in real time with customizable dashboards.  

All these features are completely free to use.
  
## Support Our Open-Source Project ❤️
If you appreciate our work, consider starring this repository or making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!

### Server Availability
Our server may occasionally be down, but please be patient. Typically, it will be back online within 15-30 minutes. We appreciate your understanding.

### About My Domains
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.hu](https://corifeus.hu) and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.

### Versioning Policy
**Version Structure:** We follow a Major.Minor.Patch versioning scheme:
- **Major:** Corresponds to the current year.
- **Minor:** Set as 4 for releases from January to June, and 10 for July to December.
- **Patch:** Incremental, updated with each build.

**Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**CORIFEUS-UTILS**](https://corifeus.com/corifeus-utils) Build v2025.4.105

 [![NPM](https://img.shields.io/npm/v/corifeus-utils.svg)](https://www.npmjs.com/package/corifeus-utils)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end
