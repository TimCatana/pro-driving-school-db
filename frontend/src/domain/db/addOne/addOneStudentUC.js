import axios from "axios";

const addOneStudentUC = async (studentObject) => {
  return await axios.post(`http://localhost:4400/student/add`, {
    studentFirstName: studentObject.studentFirstName,
    studentMiddleName: studentObject.studentMiddleName,
    studentLastName: studentObject.studentLastName,
    studentDateOfBirth: studentObject.studentDateOfBirth,
    studentGender: studentObject.studentGender,
    studentHeight: studentObject.studentHeight,
    studentAddress: studentObject.studentAddress,
    studentAddressAptNumber: studentObject.studentAddressApartmentNumber,
    studentAddressCity: studentObject.studentAddressCity,
    studentAddressPostalCode: studentObject.studentAddressPostalCode,
    studentCellPhoneNumber: studentObject.studentCellPhoneNumber,
    studentHomePhoneNumber: studentObject.studentHomePhoneNumber,
    studentDriversLicenseNumber: studentObject.studentDriversLicenseId,
    studentDriversLicenseClass: studentObject.studentDriversLicenseClass,
    studentDriversLicenseNumberIssuedDate: studentObject.studentDriversLicenseIssuedDate,
    studentDriversLicenseNumberExpDate: studentObject.studentDriversLicenseExpDate,
    studentRegisteredCourseId: studentObject.studentRegisteredCourseId,
    studentRegisteredProductId: studentObject.studentPurchasedProductId,
  });
};

export default addOneStudentUC;
