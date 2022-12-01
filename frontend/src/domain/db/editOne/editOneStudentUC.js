import axios from "axios";

const editOneStudentUC = async (studentObject, primary_key) => {
  return await axios.put(`http://localhost:4400/student/edit/${primary_key}`, {
    studentFirstName: studentObject.studentFirstName,
    studentMiddleName: studentObject.studentMiddleName,
    studentLastName: studentObject.studentLastName,
    studentDateOfBirth: studentObject.studentDateOfBirth,
    studentGender: studentObject.studentGender,
    studentCellPhoneNumber: studentObject.studentCellPhoneNumber,
    studentHomePhoneNumber: studentObject.studentHomePhoneNumber,
    studentAddress: studentObject.studentAddress,
    studentAddressCity: studentObject.studentAddressCity,
    studentAddressPostalCode: studentObject.studentAddressPostalCode,
    studentDriversLicenseNumber: studentObject.studentDriversLicenseNumber,
    studentDriversLicenseNumberIssuedDate:
      studentObject.studentDriversLicenseNumberIssuedDate,
    studentDriversLicenseNumberExpDate:
      studentObject.studentDriversLicenseNumberExpDate,
    studentRegisteredCourseId: studentObject.studentRegisteredCourseId,
    studentRegisteredProductId: studentObject.studentRegisteredProductId,
  });
};

export default editOneStudentUC;
