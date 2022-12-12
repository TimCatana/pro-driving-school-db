import axios from "axios";

const addOneInClassInstructorUC = async (inClassInstructorObject) => {
  return await axios.post(`http://localhost:4400/in-class-inst/add`, {
    iciFirstName: inClassInstructorObject.firstName,
    iciLastName: inClassInstructorObject.lastName,
    iciDriversLicenseNum: inClassInstructorObject.driversLicenseId,
    iciDriversLicenseExpDate: inClassInstructorObject.driversLicenseExpDate,
  });
};

export default addOneInClassInstructorUC;
