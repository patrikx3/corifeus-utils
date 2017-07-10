[//]: #@corifeus-header

 [![Build Status](https://travis-ci.org/patrikx3/corifeus-utils.svg?branch=master)](https://travis-ci.org/patrikx3/corifeus-utils)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/?branch=master)  
  
[![NPM](https://nodei.co/npm/corifeus-utils.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/corifeus-utils/)
---
# Corifeus Utils - Memory

This is an open source project. Just code.

### Node Version Requirement 
``` 
>=7.8.0 
```  
   
### Built on Node 
``` 
v8.1.3
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

[**CORIFEUS-UTILS**](https://pages.corifeus.com/corifeus-utils) Build v1.1.359-54

[Corifeus](http://www.corifeus.com) by [Patrik Laszlo](http://patrikx3.com)

[//]: #@corifeus-footer:end
