const addYearsToDate = (date, yearsToAdd) => {
  let _date = new Date(date);
  _date.setFullYear(_date.getFullYear() + yearsToAdd);
  return _date;
};

export default addYearsToDate;
