/**
 * Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
 * but by using 0 as the day it will give us the last day of the prior
 * month. So passing in 1 as the month number will return the last day
 * of January, not February
 */

const formatDateToYYYYMMDD = (date) => {
  let _date = new Date(date);
  // const offset = _date.getTimezoneOffset();
  // _date = new Date(_date.getTime() - offset * 60 * 1000);
  return _date.toISOString().split("T")[0];
};

export default formatDateToYYYYMMDD;
