/**
 * updates month and years if necessary.
 * + 13 months would move on to the next year
 * @param {*} date
 * @param {*} monthsToAdd
 * @returns
 */
const addMonthsToDate = (date, monthsToAdd) => {
  let _date = new Date(date);
  _date.setMonth(_date.getMonth() + monthsToAdd);
  return _date;
};

export default addMonthsToDate;
