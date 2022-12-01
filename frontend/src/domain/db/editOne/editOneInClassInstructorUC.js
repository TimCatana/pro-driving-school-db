import axios from "axios";

/**
 * Updates the subscript to mailing list option.
 */
const editOneInClassInstructorUC = async (
  inClassInstructorObject,
  primary_key
) => {
  return await axios.put(`http://localhost:4400/in-class-inst/edit/${primary_key}`, {
    iciFirstName: inClassInstructorObject.iciFirstName,
    iciLastName: inClassInstructorObject.iciLastName,
    iciDriversLicenseNum: inClassInstructorObject.iciDriversLicenseNum,
    iciDriversLicenseExpDate: inClassInstructorObject.iciDriversLicenseExpDate,
  });
};

export default editOneInClassInstructorUC;
