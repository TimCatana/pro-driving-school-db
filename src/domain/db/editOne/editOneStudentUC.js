import axios from "axios";

const editOneStudentUC = async (studentObject, primary_key) => {
  return await axios.put(`http://localhost:4400/student/edit/${primary_key}`, {
    studentFirstName: studentObject.studentFirstName,
    studentMiddleName: studentObject.studentMiddleName,
    studentLastName: studentObject.studentLastName,
    studentDateOfBirth: studentObject.studentDateOfBirth,
    studentGender: studentObject.studentGender,
    studentHeight: studentObject.studentHeight,
    studentAddress: studentObject.studentAddress,
    studentAddressAptNumber: studentObject.studentAddressApartmentNumber,
    studentAddressCity: studentObject.studentAddressCity,
    studentAddressState: studentObject.studentAddressState,
    studentAddressPostalCode: studentObject.studentAddressPostalCode,
    studentCellPhoneNumber: studentObject.studentCellPhoneNumber,
    studentHomePhoneNumber: studentObject.studentHomePhoneNumber,
    studentDriversLicenseNumber: studentObject.studentDriversLicenseId,
    studentDriversLicenseClass: studentObject.studentDriversLicenseClass,
    studentDriversLicenseNumberIssuedDate: studentObject.studentDriversLicenseIssuedDate,
    studentDriversLicenseNumberExpDate: studentObject.studentDriversLicenseExpDate,
    studentRegisteredCourseId: studentObject.studentRegisteredCourseId,
    studentRegisteredProductId: studentObject.studentPurchasedProductId,
    studentInCarInstructorId: studentObject.studentInCarInstId
  });
};

export default editOneStudentUC;
