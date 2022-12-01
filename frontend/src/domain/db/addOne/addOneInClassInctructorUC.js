import axios from "axios";

const addOneInClassInstructorUC = async (inClassInstructorObject) => {
  return await axios.post(`http://localhost:4400/in-class-inst/add`, {
    iciFirstName: inClassInstructorObject.iciFirstName,
    iciLastName: inClassInstructorObject.iciLastName,
    iciDriversLicenseNum: inClassInstructorObject.iciDriversLicenseNum,
    iciDriversLicenseExpDate: inClassInstructorObject.iciDriversLicenseExpDate,
  });
};

export default addOneInClassInstructorUC;
