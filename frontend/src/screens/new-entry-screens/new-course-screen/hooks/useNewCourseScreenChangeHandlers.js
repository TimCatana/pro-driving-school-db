const useNewCourseScreenChangeHandlers = (courseState) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseIdChange = (e) => {
    e.preventDefault();
    courseState.courseObject.setCourseId(e.target.value);
  };

  /**
   * Updates the courseCapacity to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseCapacityChange = (e) => {
    e.preventDefault();
    courseState.courseObject.setCourseCapacity(e.target.value);
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseStartDateChange = (e) => {
    e.preventDefault();
    courseState.courseObject.setCourseStartDate(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseEndDateChange = (e) => {
    e.preventDefault();
    courseState.courseObject.setCourseEndDate(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleIsCourseDigitalChange = (e) => {
    e.preventDefault();
    courseState.courseObject.setCourseIsDigital(e.target.value);
  };

  /**
   * Updates the inClassInstructor to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstructorChange = (e) => {
    e.preventDefault();
    courseState.courseObject.setCourseInClassInstructor(e.target.value);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleStartDateFocusAndBlurHandler = (isFocused) => {
    courseState.dateTextInputFocusesObject.setIsStartDateFocus(isFocused);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleEndDateFocusAndBlurHandler = (isFocused) => {
    courseState.dateTextInputFocusesObject.setIsEndDateFocus(isFocused);
  };

  /**
   * return object
   */

  const courseChangeHandlers = {
    handleCourseIdChange,
    handleCourseCapacityChange,
    handleCourseStartDateChange,
    handleCourseEndDateChange,
    handleIsCourseDigitalChange,
    handleInClassInstructorChange,
    handleStartDateFocusAndBlurHandler,
    handleEndDateFocusAndBlurHandler,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    courseChangeHandlers,
  };
};

export default useNewCourseScreenChangeHandlers;
