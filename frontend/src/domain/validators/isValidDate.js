const isValidDate = (date) => {
  const dateObject = new Date(date);
  return dateObject instanceof Date && !isNaN(dateObject);
};

export default isValidDate;
