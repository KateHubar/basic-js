const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
      let newDepth = depth;
      arr.forEach((element) => {
          if (element instanceof Array) {
              let calculatedDepth = this.calculateDepth(element, depth + 1);
              newDepth =
                  newDepth < calculatedDepth ? calculatedDepth : newDepth;
          }
      });

      return newDepth;
    }
};
