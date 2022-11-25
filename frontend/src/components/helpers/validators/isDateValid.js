const isDateValid = (date) => {
  let dateStringRegX =
    /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;

  return dateStringRegX.test(date);
};

export default isDateValid;
