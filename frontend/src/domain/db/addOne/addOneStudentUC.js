import axios from "axios";

const addOneStudentUC = async (studentObject) => {
  return await axios.post(`http://localhost:4400/student/add`, {
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

export default addOneStudentUC;
