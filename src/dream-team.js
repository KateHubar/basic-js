const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members || !(members instanceof Array)) return false;
    return members
        .filter((el) => typeof el === "string")
        .map((str) => {
            str = str.trim();
            return str[0].toUpperCase();
        })
        .sort()
        .join("");
};
