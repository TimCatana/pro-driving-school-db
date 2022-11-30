import isValidDate from "./isValidDate";

/**
 *
 * @param date needs to be in a valid format (ex. yyyy-mm-dd or dd-mm-yyyy etc...) in in order for this to work
 * @returns true - the date is in the future || false - the date is not in the future
 */
const isEndDateFuture = (startDate, endDate) => {
  const _startDate = new Date(startDate);
  const _endDate = new Date(endDate);

  if (!isValidDate(_startDate) || !isValidDate(_endDate)) {
    return false;
  }

  return _endDate > _startDate;
};

export default isEndDateFuture;
