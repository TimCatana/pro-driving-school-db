import axios from "axios";

const editOneStudentUC = async (studentObject, primary_key) => {
  return await axios.put(`http://localhost:4400/student/edit/${primary_key}`, {
    studentFirstName: studentObject.studentFirstName,
    studentMiddleName: studentObject.studentMiddleName,
    studentLastName: studentObject.studentLastName,
    studentDateOfBirth: studentObject.studentDateOfBirth,
    studentGender: studentObject.studentGender,
    studentHeight: studentObject.studentHeight,
    studentCellPhoneNumber: studentObject.studentCellPhoneNumber,
    studentHomePhoneNumber: studentObject.studentHomePhoneNumber,
    studentAddress: studentObject.studentAddress,
    studentAddressAptNumber: studentObject.studentAddressApartmentNumber,
    studentAddressCity: studentObject.studentAddressCity,
    studentAddressPostalCode: studentObject.studentAddressPostalCode,
    studentDriversLicenseNumber: studentObject.studentDriversLicenseNumber,
    studentDriversLicenseClass: studentObject.studentDriversLicenseClass,
    studentDriversLicenseNumberIssuedDate:
      studentObject.studentDriversLicenseNumberIssuedDate,
    studentDriversLicenseNumberExpDate:
      studentObject.studentDriversLicenseNumberExpDate,
    studentRegisteredCourseId: studentObject.studentRegisteredCourseId,
    studentRegisteredProductId: studentObject.studentRegisteredProductId,
  });
};

export default editOneStudentUC;
