const useNewStudentScreenChangeHandlers = (studentState) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentFirstNameChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentFirstName: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentMiddleNameChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentMiddleName: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentLastNameChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentLastName: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDateOfBirthChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentDateOfBirth: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentGenderChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentGender: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentCellPhoneNumberChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentCellPhoneNumber: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentHomePhoneNumberChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentHomePhoneNumber: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentAddress: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressCityChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentAddressCity: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressPostalCodeChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentAddressPostalCode: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentDriversLicenseNumber: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberIssuedDateChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentDriversLicenseNumberIssuedDate: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberExpDateChange = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentDriversLicenseNumberExpDate: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentRegisteredCourseId = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentRegisteredCourseId: e.target.value,
    });
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentRegisteredProductId = (e) => {
    e.preventDefault();
    studentState.setStudentObject({
      ...studentState.studentObject,
      studentRegisteredProductId: e.target.value,
    });
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleStudentDateOfBirthFocusAndBlurHandler = (isFocused) => {
    studentState.setIsDateOfBirthFocus(isFocused);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleStudentDriversLicenseIssuedDateFocusAndBlurHandler = (
    isFocused
  ) => {
    studentState.setIsStudentDriversLicenseIssuedDateFocus(isFocused);
  };

  /**
   * return object
   */

  const studentChangeHandlers = {
    handleStudentFirstNameChange,
    handleStudentMiddleNameChange,
    handleStudentLastNameChange,
    handleStudentDateOfBirthChange,
    handleStudentGenderChange,
    handleStudentCellPhoneNumberChange,
    handleStudentHomePhoneNumberChange,
    handleStudentAddressChange,
    handleStudentAddressCityChange,
    handleStudentAddressPostalCodeChange,
    handleStudentDriversLicenseNumberChange,
    handleStudentDriversLicenseNumberIssuedDateChange,
    handleStudentDriversLicenseNumberExpDateChange,
    handleStudentRegisteredCourseId,
    handleStudentRegisteredProductId,
    handleStudentDateOfBirthFocusAndBlurHandler,
    handleStudentDriversLicenseIssuedDateFocusAndBlurHandler,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    studentChangeHandlers,
  };
};

export default useNewStudentScreenChangeHandlers;
