# SmartRange
SmartRange returns an array of numbers within a given range.
# Usage
**From NPM***
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
