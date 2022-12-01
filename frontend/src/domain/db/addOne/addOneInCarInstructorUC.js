import axios from "axios";

const addOneInCarInstructorUC = async (inCarInstructorObject) => {
  return await axios.post(`http://localhost:4400/in-car-inst/add`, {
    iciFirstName: inCarInstructorObject.iciFirstName,
    iciLastName: inCarInstructorObject.iciLastName,
    iciDriversLicenseNum: inCarInstructorObject.iciDriversLicenseNum,
    iciDriversLicenseExpDate: inCarInstructorObject.iciDriversLicenseExpDate,
    iciGLicenseNum: inCarInstructorObject.iciGLicenseNum,
    iciGLicenseExpDate: inCarInstructorObject.iciGLicenseExpDate,
  });
};

export default addOneInCarInstructorUC;
