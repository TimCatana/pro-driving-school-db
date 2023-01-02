const useNewStudentScreenChangeHandlers = (studentState) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentFirstNameChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentFirstName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentMiddleNameChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentMiddleName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentLastNameChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentLastName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDateOfBirthChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentDateOfBirth(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentGenderChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentGender(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentHeightChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentHeight(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentAddress(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressApartmentNumberChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentAddressApartmentNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressCityChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentAddressCity(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressStateChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentAddressState(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressPostalCodeChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentAddressPostalCode(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentCellPhoneNumberChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentCellPhoneNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentHomePhoneNumberChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentHomePhoneNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseIdChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentDriversLicenseId(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseClassChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentDriversLicenseClass(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseIssuedDateChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentDriversLicenseIssuedDate(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseExpDateChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentDriversLicenseExpDate(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentRegisteredCourseIdChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentRegisteredCourseId(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentPurchasedProductIdChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentPurchasedProductId(e.target.value);
  };

   /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
   const handleStudentInClassInstIdChange = (e) => {
    e.preventDefault();
    studentState.studentObject.setStudentInCarInstId(e.target.value);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleStudentDateOfBirthFocusAndBlurHandler = (isFocused) => {
    studentState.dateTextInputFocusesObject.setIsDateOfBirthFocus(isFocused);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleStudentDriversLicenseIssuedDateFocusAndBlurHandler = (isFocused) => {
    studentState.dateTextInputFocusesObject.setIsStudentDriversLicenseIssuedDateFocus(isFocused);
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
    handleStudentHeightChange,
    handleStudentCellPhoneNumberChange,
    handleStudentHomePhoneNumberChange,
    handleStudentAddressChange,
    handleStudentAddressApartmentNumberChange,
    handleStudentAddressCityChange,
    handleStudentAddressStateChange,
    handleStudentAddressPostalCodeChange,
    handleStudentDriversLicenseIdChange,
    handleStudentDriversLicenseClassChange,
    handleStudentDriversLicenseIssuedDateChange,
    handleStudentDriversLicenseExpDateChange,
    handleStudentRegisteredCourseIdChange,
    handleStudentPurchasedProductIdChange,
    handleStudentInClassInstIdChange,
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
