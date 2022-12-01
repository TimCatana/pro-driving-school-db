const useNewInClassInstructorScreenChangeHandlers = (
  inClassInstructorState
) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstFirstNameChange = (e) => {
    e.preventDefault();
    inClassInstructorState.setInClassInstructorObject({
      ...inClassInstructorState.inClassInstructorObject,
      iciFirstName: e.target.value,
    });
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstLastNameChange = (e) => {
    e.preventDefault();
    inClassInstructorState.setInClassInstructorObject({
      ...inClassInstructorState.inClassInstructorObject,
      iciLastName: e.target.value,
    });
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstDriversLicenseNumChange = (e) => {
    e.preventDefault();
    inClassInstructorState.setInClassInstructorObject({
      ...inClassInstructorState.inClassInstructorObject,
      iciDriversLicenseNum: e.target.value,
    });
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstDriversLicenseExpDateChange = (e) => {
    e.preventDefault();
    inClassInstructorState.setInClassInstructorObject({
      ...inClassInstructorState.inClassInstructorObject,
      iciDriversLicenseExpDate: e.target.value,
    });
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleICIDriversLicenseFocusAndBlurHandler = (isFocused) => {
    inClassInstructorState.setIsICIDriversLicenseFocus(isFocused);
  };

  /**
   * return object
   */

  const InClassInstructorChangeHandlers = {
    handleInClassInstFirstNameChange,
    handleInClassInstLastNameChange,
    handleInClassInstDriversLicenseNumChange,
    handleInClassInstDriversLicenseExpDateChange,
    handleICIDriversLicenseFocusAndBlurHandler,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    InClassInstructorChangeHandlers,
  };
};

export default useNewInClassInstructorScreenChangeHandlers;
