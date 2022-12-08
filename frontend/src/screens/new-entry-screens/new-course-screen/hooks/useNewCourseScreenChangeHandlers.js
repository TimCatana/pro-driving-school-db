const useNewCourseScreenChangeHandlers = (courseState) => {
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseIdChange = (e) => {
    e.preventDefault();
    console.log(courseState.courseObject.courseId);
    courseState.setCourseObject({
      ...courseState.courseObject,
      courseId: e.target.value,
    });
  };

  /**
   * Updates the courseCapacity to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseCapacityChange = (e) => {
    e.preventDefault();
    courseState.setCourseObject({
      ...courseState.courseObject,
      courseCapacity: e.target.value,
    });
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseStartDateChange = (e) => {
    e.preventDefault();
    courseState.setCourseObject({
      ...courseState.courseObject,
      courseStartDate: e.target.value,
    });
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseEndDateChange = (e) => {
    e.preventDefault();
    courseState.setCourseObject({
      ...courseState.courseObject,
      courseEndDate: e.target.value,
    });
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleIsCourseDigitalChange = (e) => {
    e.preventDefault();
    courseState.setCourseObject({
      ...courseState.courseObject,
      courseIsDigital: e.target.value,
    });
  };

  /**
   * Updates the inClassInstructor to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstructorChange = (e) => {
    e.preventDefault();
    courseState.setCourseObject({
      ...courseState.courseObject,
      courseInClassInstructor: e.target.value,
    });
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleStartDateFocusAndBlurHandler = (isFocused) => {
    courseState.setIsStartDateFocus(isFocused);
  };

  /**
   *
   * @param {*} isFocused
   */
  const handleEndDateFocusAndBlurHandler = (isFocused) => {
    courseState.setIsEndDateFocus(isFocused);
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
