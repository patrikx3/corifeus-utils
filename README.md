[//]: #@corifeus-header

 [![Build Status](https://travis-ci.org/patrikx3/corifeus-utils.svg?branch=master)](https://travis-ci.org/patrikx3/corifeus-utils)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/?branch=master)  
 
  
[![NPM](https://nodei.co/npm/corifeus-utils.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/corifeus-utils/)
---
# Corifeus Utils - Memory v1.1.695-239  

This is an open source project. Just code. If you like this code, please add a star in GitHub and you really like, you can donate as well. Thanks you so much!

### Node Version Requirement 
``` 
>=8.9.0 
```  
   
### Built on Node 
``` 
v9.2.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    

# Description  

                        
[//]: #@corifeus-header:end

Misc utils (async array iterator, random characters, exit on silent ```unhandledRejection``` errors, etc...)

```javascript
const utils = require('corifeus-utils');
```

* Modules
  * Async Array Iterator ```forEachAsync```
  * ```JSON.strintify``` for ```Error```
  * Lodash Pascal
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
  
* time
  * verbose
  * span
* regexp
  * escape
* random
  * async (default is base62)
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
* http
  * async request
* db
  * file based json storage
* child-process
  * async exec
* array
  * forEachAsync, async for each

  
[//]: #@corifeus-footer

---

[**CORIFEUS-UTILS**](https://pages.corifeus.com/corifeus-utils) Build v1.1.695-239 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=LFRV89WPRMMVE&lc=HU&item_name=Patrik%20Laszlo&item_number=patrikx3&currency_code=HUF&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


 

[//]: #@corifeus-footer:end
