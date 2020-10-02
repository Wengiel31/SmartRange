class SmartRange {
    /**
     * @param {number} start Start number (inclusive)
     * @param {number} end End number (inclusive)
     * @returns {Array} Array
     */
    createNewRange(start, end) {
        if (typeof start != "number") {
            throw new TypeError(`TypeErrror [ERR_INVALID_ARG_TYPE]: The "start" argument must be of type number. Received type ${typeof start}`);
        } else if (typeof end != "number") {
            throw new TypeError(`TypeErrror [ERR_INVALID_ARG_TYPE]: The "end" argument must be of type number. Received type ${typeof end}`);
        } else if (start < 0) {
            throw new RangeError(`RangeError [ERR_OUT_OF_RANGE]: The "start" argument must be >= 0. Received ${start}`);
        } else if (end < 0) {
            throw new RangeError(`RangeError [ERR_OUT_OF_RANGE]: The "end" argument must be >= 0. Received ${end}`);
        } else if (start > 65536) {
            throw new RangeError(`RangeError [ERR_OUT_OF_RANGE]: The "start" argument must be <= 65536. Received ${start}`);
        } else if (end > 65536) {
            throw new RangeError(`RangeError [ERR_OUT_OF_RANGE]: The "end" argument must be <= 65536. Received ${start}`);
        } else if (end < start) {
            throw new RangeError(`RangeError [ERR_OUT_OF_RANGE]: The "end" argument must be > then the "start" argument.`);
        } else {
            let newRange = [];
            for (let i = start; i <= end; i++) {
                newRange.push(i);
            }
            return newRange;
        }
    }
}
module.exports = SmartRange;
