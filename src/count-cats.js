const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsCounter = matrix.flat().filter(e => e == '^^').length
  return catsCounter;
}