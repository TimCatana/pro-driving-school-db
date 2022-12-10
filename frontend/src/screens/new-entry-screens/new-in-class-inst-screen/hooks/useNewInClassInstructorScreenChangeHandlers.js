const useNewInClassInstructorScreenChangeHandlers = (inClassInstructorState) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstFirstNameChange = (e) => {
    e.preventDefault();
    inClassInstructorState.inClassInstructorObject.setFirstName(e.target.value);
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstLastNameChange = (e) => {
    e.preventDefault();
    inClassInstructorState.inClassInstructorObject.setLastName(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstDriversLicenseNumChange = (e) => {
    e.preventDefault();
    inClassInstructorState.inClassInstructorObject.setDriversLicenseId(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstDriversLicenseExpDateChange = (e) => {
    e.preventDefault();
    inClassInstructorState.inClassInstructorObject.setDriversLicenseExpDate(e.target.value);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleDriversLicenseFocusAndBlurHandler = (isFocused) => {
    inClassInstructorState.dateTextInputFocusesObject.setIsInstDriversLicenseFocus(isFocused);
  };

  /**
   * return object
   */

  const InClassInstructorChangeHandlers = {
    handleInClassInstFirstNameChange,
    handleInClassInstLastNameChange,
    handleInClassInstDriversLicenseNumChange,
    handleInClassInstDriversLicenseExpDateChange,

    handleDriversLicenseFocusAndBlurHandler,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    InClassInstructorChangeHandlers,
  };
};

export default useNewInClassInstructorScreenChangeHandlers;
