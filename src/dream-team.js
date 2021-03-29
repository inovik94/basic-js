const CustomError = require("../extensions/custom-error");
// let dreamteam = ['Yana','Alena','Malena',true,123]
// createDreamTeam(dreamteam);
// console.log(members);

module.exports = function createDreamTeam(dreamteam) {
  if (!Array.isArray(dreamteam)) return false;
  return dreamteam
    .filter((el) => typeof el == "string")
    .map((e) => e
      .toLowerCase()
      .replace(/\s/g, "")
      .charAt(0)
      .toUpperCase())
    .sort()
    .join("");
};
