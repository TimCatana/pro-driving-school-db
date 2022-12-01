import axios from "axios";

// TODO - object goes in parameter
const addOneInCarInstructorUC = () => {
  axios.post(`http://localhost:4400/in-car-inst/add`, {
    inCarInstFirstName,
    inCarInstLastName,
    inCarInstDriversLicense,
    inCarInstDriversLicenseExpDate,
    inCarInstGLicense,
    inCarInstGLicenseExpDate,
  });
};

export default addOneInCarInstructorUC;
