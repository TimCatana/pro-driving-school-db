import axios from "axios";

const addOneInCarInstructorUC = async (inCarInstructorObject) => {
  return await axios.post(`http://localhost:4400/in-car-inst/add`, {
    iciFirstName: inCarInstructorObject.firstName,
    iciLastName: inCarInstructorObject.lastName,
    iciDriversLicenseNum: inCarInstructorObject.instDriversLicenseId,
    iciDriversLicenseExpDate: inCarInstructorObject.instDriversLicenseExpDate,
    iciGLicenseNum: inCarInstructorObject.gDriversLicenseId,
    iciGLicenseExpDate: inCarInstructorObject.gDriversLicenseExpDate,
  });
};

export default addOneInCarInstructorUC;
