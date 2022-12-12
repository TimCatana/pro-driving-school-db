const useNewInCarInstructorScreenChangeHandlers = (inCarInstructorState) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstFirstNameChange = (e) => {
    e.preventDefault();
    inCarInstructorState.inCarInstructorObject.setFirstName(e.target.value);
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstLastNameChange = (e) => {
    e.preventDefault();
    inCarInstructorState.inCarInstructorObject.setLastName(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstDriversLicenseNumChange = (e) => {
    e.preventDefault();
    inCarInstructorState.inCarInstructorObject.setInstDriversLicenseId(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstDriversLicenseExpDateChange = (e) => {
    e.preventDefault();
    inCarInstructorState.inCarInstructorObject.setInstDriversLicenseExpDate(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstGLicenseNumChange = (e) => {
    e.preventDefault();
    inCarInstructorState.inCarInstructorObject.setGDriversLicenseId(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstGLicenseExpDateChange = (e) => {
    e.preventDefault();
    inCarInstructorState.inCarInstructorObject.setGDriversLicenseExpDate(e.target.value);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleInstDriversLicenseFocusAndBlurHandler = (isFocused) => {
    inCarInstructorState.dateTextInputFocusesObject.setIsInstDriversLicenseFocus(isFocused);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleGDriversLicenseFocusAndBlurHandler = (isFocused) => {
    inCarInstructorState.dateTextInputFocusesObject.setIsGDriversLicenseFocus(isFocused);
  };

  /**
   * return object
   */

  const inCarInstructorChangeHandlers = {
    handleInCarInstFirstNameChange,
    handleInCarInstLastNameChange,
    handleInCarInstDriversLicenseNumChange,
    handleInCarInstDriversLicenseExpDateChange,
    handleInCarInstGLicenseNumChange,
    handleInCarInstGLicenseExpDateChange,

    handleInstDriversLicenseFocusAndBlurHandler,
    handleGDriversLicenseFocusAndBlurHandler,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inCarInstructorChangeHandlers,
  };
};

export default useNewInCarInstructorScreenChangeHandlers;
