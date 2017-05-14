[//]: #@corifeus-header


# Corifeus Utils - Memory

### Node Version Requirement 
``` 
>=7.8.0 
```  
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    
  
# Description


---

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
[**CORIFEUS-UTILS**](https://pages.corifeus.tk/corifeus-utils) Build v1.1.127-21

[Corifeus](http://www.corifeus.tk)) by [Patrik Laszlo](http://patrikx3.tk)
 

[//]: #@corifeus-footer:end
