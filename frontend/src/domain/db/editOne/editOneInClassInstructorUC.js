import axios from "axios";

const editOneInClassInstructorUC = async (inClassInstructorObject, primary_key) => {
  return await axios.put(`http://localhost:4400/in-class-inst/edit/${primary_key}`, {
    iciFirstName: inClassInstructorObject.firstName,
    iciLastName: inClassInstructorObject.lastName,
    iciDriversLicenseNum: inClassInstructorObject.driversLicenseId,
    iciDriversLicenseExpDate: inClassInstructorObject.driversLicenseExpDate,
  });
};

export default editOneInClassInstructorUC;
