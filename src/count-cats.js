const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countCatsAll = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((value, index) => {
      if (value === "^^") {
        countCatsAll = countCatsAll + 1;

        return countCatsAll;
      }
    });
  }
  return countCatsAll;
  //console.log(countCatsAll);
}
module.exports = {
  countCats,
};
