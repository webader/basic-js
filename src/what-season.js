const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const seasons = [
  {
    nameSeason: "spring",
    monthStart: 03,
    dayStart: 01,
    monthEnd: 05,
    dayEnd: 31,
  },
  {
    nameSeason: "summer",
    monthStart: 06,
    dayStart: 01,
    monthEnd: 08,
    dayEnd: 31,
  },
  {
    nameSeason: "autumn",
    monthStart: 09,
    dayStart: 01,
    monthEnd: 11,
    dayEnd: 30,
  },
  {
    nameSeason: "spring",
    monthStart: 12,
    dayStart: 01,
    monthEnd: 02,
    dayEnd: 28,
  },
];
function getSeason(date) {
  try {
    if (!date) return "Unable to determine the time of year!";

    if (!(date instanceof Date)) throw new Error("Invalid date!");

    if (new Date().toString() === date.toString())
      throw new Error("Invalid date!");

    const monthIndex = new Date(date).getMonth() + 1;

    if ((monthIndex >= 0 && monthIndex <= 2) || monthIndex === 12)
      return "winter";
    if (monthIndex >= 3 && monthIndex <= 5) return "spring";
    if (monthIndex >= 6 && monthIndex <= 8) return "summer";

    if (monthIndex >= 9 && monthIndex <= 11) return "autumn";
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = {
  getSeason,
};
