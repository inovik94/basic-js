const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr,levels = 1) {
      
      arr.forEach(e => {
          if (Array.isArray(e)) {
               levels = Math.max(levels, 1 + this.calculateDepth(e));
          }
      });
      return levels;
  }
};