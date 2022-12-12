const isNumber = (variable) => {
  const numberRegX = /^-?[\d.]+(?:e-?\d+)?$/;
  return numberRegX.test(variable);
};

export default isNumber;
