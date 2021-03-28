const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let baseStr = '' + str;
    if (options.addition !== undefined) {
        const additionRepeatTimes = options.additionRepeatTimes || 1;
        for (let index = 0; index < additionRepeatTimes; index++) {
            baseStr += options.addition;
            if (index + 1 < additionRepeatTimes)
                baseStr += options.additionSeparator || "|";
        }
    }
    let result = "";
    const repeatTimes = options.repeatTimes || 1;
    for (let index = 0; index < repeatTimes; index++) {
        result += baseStr;
        if (index + 1 < repeatTimes) result += options.separator || "+";
    }
    return result;
};
