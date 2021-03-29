const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition !== undefined ? options.addition : "";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";
  let newStr = "";
  let newAddition = "";


  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i == additionRepeatTimes - 1) {
      (newAddition += addition)
    } else {
      newAddition += addition + additionSeparator
    };
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (i == repeatTimes - 1) {
      (newStr += str + newAddition)
    } else {
      newStr += str + newAddition + separator;
    }
  }

  return newStr;
};
