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
    // // TODO - axios call to node backend that adds new course entry
    // s

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
