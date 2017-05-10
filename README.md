[//]: #@corifeus-header

[![Build Status](https://travis-ci.org/patrikx3/corifeus-utils.svg?branch=master)](https://travis-ci.org/patrikx3/corifeus-utils)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus-utils/?branch=master)  [![Trello](https://img.shields.io/badge/Trello-Corifeus-026aa7.svg)](https://trello.com/b/3NArfcD1/corifeus)
  
[![NPM](https://nodei.co/npm/corifeus-utils.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/corifeus-utils/)
------

# Corifeus Utils - Memory

### Node Version Requirement 
``` >=7.8.0 ```  
   
The ```async``` and ```await``` keywords are required.

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
  
[//]: #@corifeus-footer

---
[**CORIFEUS-UTILS**](https://pages.corifeus.tk/corifeus-utils) Build v1.1.11-132 on 5/5/2017, 1:33:34 PM

[Corifeus](http://github.com/patrikx3/corifeus) by [Patrik Laszlo](http://patrikx3.tk)
 

[//]: #@corifeus-footer:end
