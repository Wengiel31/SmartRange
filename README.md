# SmartRange
SmartRange returns an array of numbers within a given range.
# Usage
**From NPM**
```javascript
const SmartRange = require("smartrange");
```
**From a local file**
```javascript
const SmartRange = require("./index.js");
```
```javascript
const start = 10; // Start number (inclusive)
const end = 1000 // End number (inclusive)
const range = new SmartRange();
const myRange = range.createNewRange(start, end);
console.log(myRange);
// Expected: [10, 11, 12, ..., 998, 999, 1000]
```
# Changelog
**1.0.4** - Minor README changes<br />
**1.0.3** - Minor README changes<br />
**1.0.2** - Removed 65536 limit, added changelog to README, announced function support<br />
**1.0.1** - Minor README changes<br />
**1.0.0** - Initial release<br />
