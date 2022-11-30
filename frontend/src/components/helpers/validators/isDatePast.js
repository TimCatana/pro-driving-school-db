import isValidDate from "./isValidDate";

/**
 *
 * @param selectedDate needs to be in a valid format (ex. yyyy-mm-dd or dd-mm-yyyy etc...) in in order for this to work
 * @returns true - the date is in the past || false - the date is not in the past
 */
const isDatePast = (selectedDate) => {
  const todaysDate = new Date();
  const _selectedDate = new Date(selectedDate);

  if (!isValidDate(_selectedDate)) {
    return false;
  }

  return _selectedDate < todaysDate;
};

export default isDatePast;
