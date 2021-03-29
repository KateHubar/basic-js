const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!arr || !(arr instanceof Array)) throw Error("Error");
    if (!arr.length) return [];
    const editableArray = [...arr];
    const result = [];
    let discard = false;

    for (let index = 0; index < editableArray.length; index++) {
        if (discard) {
            discard = false;
            continue;
        }
        if (typeof editableArray[index] === "string") {
            const control = editableArray[index];
            switch (control) {
                case "--discard-next":
                    editableArray[index + 1] = undefined;
                    discard = true;
                    break;
                case "--discard-prev":
                    if (result.length && editableArray[index - 1] !== undefined)
                        result.length--;
                    break;
                case "--double-next":
                    if (editableArray[index + 1] !== undefined)
                        result.push(editableArray[index + 1]);
                    break;
                case "--double-prev":
                    if (result.length && editableArray[index - 1] !== undefined)
                        result.push(editableArray[index - 1]);
                    break;
                default:
                    result.push(control);
                    break;
            }
        } else {
            result.push(editableArray[index]);
        }
    }
    return result;
};
