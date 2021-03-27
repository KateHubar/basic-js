const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    if (!matrix) return false;
    if (!(matrix instanceof Array)) return false;
    return matrix.reduce(function (acc, el) {
        return (
            acc +
            el.filter(function (e) {
                return e === "^^";
            }).length
        );
    }, 0);
};
