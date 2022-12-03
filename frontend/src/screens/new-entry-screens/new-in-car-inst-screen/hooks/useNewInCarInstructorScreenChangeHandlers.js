const useNewInCarInstructorScreenChangeHandlers = (inCarInstructorState) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstFirstNameChange = (e) => {
    e.preventDefault();
    inCarInstructorState.setInCarInstructorObject({
      ...inCarInstructorState.inCarInstructorObject,
      iciFirstName: e.target.value,
    });
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstLastNameChange = (e) => {
    e.preventDefault();
    inCarInstructorState.setInCarInstructorObject({
      ...inCarInstructorState.inCarInstructorObject,
      iciLastName: e.target.value,
    });
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstDriversLicenseNumChange = (e) => {
    e.preventDefault();
    inCarInstructorState.setInCarInstructorObject({
      ...inCarInstructorState.inCarInstructorObject,
      iciDriversLicenseNum: e.target.value,
    });
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstDriversLicenseExpDateChange = (e) => {
    e.preventDefault();
    inCarInstructorState.setInCarInstructorObject({
      ...inCarInstructorState.inCarInstructorObject,
      iciDriversLicenseExpDate: e.target.value,
    });
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstGLicenseNumChange = (e) => {
    e.preventDefault();
    inCarInstructorState.setInCarInstructorObject({
      ...inCarInstructorState.inCarInstructorObject,
      iciGLicenseNum: e.target.value,
    });
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstGLicenseExpDateChange = (e) => {
    e.preventDefault();
    inCarInstructorState.setInCarInstructorObject({
      ...inCarInstructorState.inCarInstructorObject,
      iciGLicenseExpDate: e.target.value,
    });
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleICIDriversLicenseFocusAndBlurHandler = (isFocused) => {
    inCarInstructorState.setIsICIInstDriversLicenseFocus(isFocused);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleICIGDriversLicenseFocusAndBlurHandler = (isFocused) => {
    inCarInstructorState.setICIGDriversLicenseFocus(isFocused);
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
    handleICIDriversLicenseFocusAndBlurHandler,
    handleICIGDriversLicenseFocusAndBlurHandler,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inCarInstructorChangeHandlers,
  };
};

export default useNewInCarInstructorScreenChangeHandlers;
