const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(/* members */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

//
function createDreamTeam(members) {
  throw new NotImplementedError("Not implemented");
  let nameTeam = "";
  members.forEach((value, index) => {
    if (typeof value === "string") {
      let arr = value[0];
      nameTeam = nameTeam + arr;
    } else {
      index++;
    }
  });
  nameTeam = nameTeam.split("").sort().join("");
  return nameTeam;
}
//

module.exports = {
  createDreamTeam,
};
