import {
  addOneStudentUC,
  deleteOneStudentUC,
  editOneStudentUC,
} from "../../../../domain/db";

const useNewStudentScreenButtonHandlers = (studentState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewStudentEntry = async () => {
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${studentState.isLoading}
    // sfn ${studentState.studentObject.studentFirstName}
    // ${typeof studentState.studentObject.studentFirstName}
    // ${studentState.studentObject.isStudentFirstNameError}
    // smn ${studentState.studentObject.studentMiddleName}
    // ${typeof studentState.studentObject.studentMiddleName}
    // ${studentState.studentObject.isStudentMiddleNameError}
    // sln ${studentState.studentObject.studentLastName}
    // ${typeof studentState.studentObject.studentLastName}
    // ${studentState.studentObject.isStudentLastNameError}
    // sdob ${studentState.studentObject.studentDateOfBirth}
    // ${typeof studentState.studentObject.studentDateOfBirth}
    // ${studentState.studentObject.isStudentDateOfBirthError}
    // sg ${studentState.studentObject.studentGender}
    // ${typeof studentState.studentObject.studentGender}
    // ${studentState.studentObject.isStudentGenderError}
    // scp ${studentState.studentObject.studentCellPhoneNumber}
    // ${typeof studentState.studentObject.studentCellPhoneNumber}
    // ${studentState.studentObject.isStudentCellPhoneNumberError}
    // shp ${studentState.studentObject.studentHomePhoneNumber}
    // ${typeof studentState.studentObject.studentHomePhoneNumber}
    // ${studentState.studentObject.isStudentHomePhoneNumberError}
    // sa ${studentState.studentObject.studentAddress}
    // ${typeof studentState.studentObject.studentAddress}
    // ${studentState.studentObject.isStudentAddressError}
    // sac ${studentState.studentObject.studentAddressCity}
    // ${typeof studentState.studentObject.studentAddressCity}
    // ${studentState.studentObject.isStudentAddressCityError}
    // sapc ${studentState.studentObject.studentAddressPostalCode}
    // ${typeof studentState.studentObject.studentAddressPostalCode}
    // ${studentState.studentObject.isStudentAddressPostalCodeError}
    // sdln ${studentState.studentObject.studentDriversLicenseNumber}
    // ${typeof studentState.studentObject.studentDriversLicenseNumber}
    // ${studentState.studentObject.isStudentDriversLicenseNumberError}
    // sdlid ${studentState.studentObject.studentDriversLicenseNumberIssuedDate}
    // ${typeof studentState.studentObject.studentDriversLicenseNumberIssuedDate}
    // ${studentState.studentObject.isStudentDriversLicenseNumberIssuedDateError}
    // sdled ${studentState.studentObject.studentDriversLicenseNumberExpDate}
    // ${typeof studentState.studentObject.studentDriversLicenseNumberExpDate}
    // ${studentState.studentObject.isStudentDriversLicenseNumberExpDateError}
    // src ${studentState.studentObject.studentRegisteredCourseId}
    // ${typeof studentState.studentObject.studentRegisteredCourseId}
    // ${studentState.studentObject.isStudentRegisteredCourseIdError}
    // srp ${studentState.studentObject.studentRegisteredProductId}
    // ${typeof studentState.studentObject.studentRegisteredProductId}
    // ${studentState.studentObject.isStudentRegisteredProductIdError}
    // `);

    studentState.setIsLoading(true);
    if (
      !studentState.studentObject.isStudentFirstNameError &&
      !studentState.studentObject.isStudentMiddleNameError &&
      !studentState.studentObject.isStudentLastNameError &&
      !studentState.studentObject.isStudentDateOfBirthError &&
      !studentState.studentObject.isStudentGenderError &&
      !studentState.studentObject.isStudentCellPhoneNumberError &&
      !studentState.studentObject.isStudentHomePhoneNumberError &&
      !studentState.studentObject.isStudentAddressError &&
      !studentState.studentObject.isStudentAddressCityError &&
      !studentState.studentObject.isStudentAddressPostalCodeError &&
      !studentState.studentObject.isStudentDriversLicenseNumberError &&
      !studentState.studentObject
        .isStudentDriversLicenseNumberIssuedDateError &&
      !studentState.studentObject.isStudentDriversLicenseNumberExpDateError &&
      !studentState.studentObject.isStudentRegisteredCourseIdError &&
      !studentState.studentObject.isStudentRegisteredProductIdError
    ) {
      await addOneStudentUC(studentState.studentObject);
    }
    studentState.setIsLoading(false);
    studentState.setStudentSaved(true);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditStudentEntry = async () => {
    if (
      !studentState.studentObject.isStudentFirstNameError &&
      !studentState.studentObject.isStudentMiddleNameError &&
      !studentState.studentObject.isStudentLastNameError &&
      !studentState.studentObject.isStudentDateOfBirthError &&
      !studentState.studentObject.isStudentGenderError &&
      !studentState.studentObject.isStudentCellPhoneNumberError &&
      !studentState.studentObject.isStudentHomePhoneNumberError &&
      !studentState.studentObject.isStudentAddressError &&
      !studentState.studentObject.isStudentAddressCityError &&
      !studentState.studentObject.isStudentAddressPostalCodeError &&
      !studentState.studentObject.isStudentDriversLicenseNumberError &&
      !studentState.studentObject
        .isStudentDriversLicenseNumberIssuedDateError &&
      !studentState.studentObject.isStudentDriversLicenseNumberExpDateError &&
      !studentState.studentObject.isStudentRegisteredCourseIdError &&
      !studentState.studentObject.isStudentRegisteredProductIdError
    ) {
      await editOneStudentUC(
        studentState.studentObject,
        studentState.primary_key
      );
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteStudent = async () => {
    const result = await deleteOneStudentUC(studentState.primary_key);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  const studentButtonHandlers = {
    handleAddNewStudentEntry,
    handleEditStudentEntry,
    handleDeleteStudent,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { studentButtonHandlers };
};

export default useNewStudentScreenButtonHandlers;
