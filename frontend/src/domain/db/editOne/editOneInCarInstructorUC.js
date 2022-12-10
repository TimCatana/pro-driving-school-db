import axios from "axios";

const editOneInCarInstructorUC = async (inCarInstructorObject, primary_key) => {
  return await axios.put(`http://localhost:4400/in-car-inst/edit/${primary_key}`, {
    iciFirstName: inCarInstructorObject.firstName,
    iciLastName: inCarInstructorObject.lastName,
    iciDriversLicenseNum: inCarInstructorObject.instDriversLicenseId,
    iciDriversLicenseExpDate: inCarInstructorObject.instDriversLicenseExpDate,
    iciGLicenseNum: inCarInstructorObject.gDriversLicenseId,
    iciGLicenseExpDate: inCarInstructorObject.gDriversLicenseExpDate,
  });
};

export default editOneInCarInstructorUC;
