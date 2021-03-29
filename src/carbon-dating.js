const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {
  if (
    typeof activity !== "string" ||
    !activity ||
    activity <= 0 ||
    activity > 15 ||
    Number.isNaN(+activity) ||
    activity == NaN
  )
    return false;
  activity = parseFloat(activity);

  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD));
};
