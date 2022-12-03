import axios from "axios";

const editOneInCarInstructorUC = async (inCarInstructorObject, primary_key) => {
  return await axios.put(
    `http://localhost:4400/in-car-inst/edit/${primary_key}`,
    {
      iciFirstName: inCarInstructorObject.iciFirstName,
      iciLastName: inCarInstructorObject.iciLastName,
      iciDriversLicenseNum: inCarInstructorObject.iciDriversLicenseNum,
      iciDriversLicenseExpDate: inCarInstructorObject.iciDriversLicenseExpDate,
      iciGLicenseNum: inCarInstructorObject.iciGLicenseNum,
      iciGLicenseExpDate: inCarInstructorObject.iciGLicenseExpDate,
    }
  );
};

export default editOneInCarInstructorUC;
