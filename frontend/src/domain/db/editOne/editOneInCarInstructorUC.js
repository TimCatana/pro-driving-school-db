/**
 * Updates the subscript to mailing list option.
 */
const editOneInCarInstructorUC = (primary_key) => {
  axios.put(`http://localhost:4400/in-car-inst/edit/${primary_key}`, {
    inCarInstFirstName,
    inCarInstLastName,
    inCarInstDriversLicense,
    inCarInstDriversLicenseExpDate,
    inCarInstGLicense,
    inCarInstGLicenseExpDate,
  });
};

export default editOneInCarInstructorUC;
