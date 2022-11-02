import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateValid from "../../../components/helpers/isDateValid";

const useNewCourseScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const [isLoading, _setIsLoading] = useState(false);

  const [courseId, _setCourseId] = useState("");
  const [isCourseIdError, _setIsCourseIdError] = useState(true);

  const [courseStartDate, _setCourseStartDate] = useState("");
  const [isCourseStartDateError, _setIsCourseStartDateError] = useState(true);

  const [courseEndDate, _setCourseEndDate] = useState("");
  const [isCourseEndDateError, _setIsCourseEndDateError] = useState(true);

  const [_isCourseDigital, _setIsCourseDigital] = useState("");
  const [isCourseDigitalError, _setIsCourseDigitalError] = useState(true);

  const [courseCapacity, _setCourseCapacity] = useState("");
  const [isCourseCapacityError, _setIsCourseCapacityError] = useState(true);

  const [_courseInClassInstructor, _setCourseInClassInstructor] = useState("");
  const [isCourseInClassInstructorError, _setIsCourseInClassInstructorError] =
    useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    courseId.length > 0
      ? _setIsCourseIdError(false)
      : _setIsCourseIdError(true);
    // TODO - make sure its a valid number? HTML should take care of that. though I will validate again in the backend.
  }, [courseId]);

  /**
   * Validates newly selected start date
   * @dependent courseStartDate
   */
  useEffect(() => {
    courseStartDate != null
      ? _setIsCourseStartDateError(false)
      : _setIsCourseStartDateError(true);
    _setIsCourseStartDateError(!isDateValid(courseStartDate));
  }, [courseStartDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    courseEndDate != null ? _setIsCourseEndDateError(false) : _setIsCourseEndDateError(true);
    _setIsCourseEndDateError(!isDateValid(courseEndDate));
  }, [courseEndDate]);

  /**
   * Validates newly selected is class digital or in person option
   * @dependent isDigital
   */
  useEffect(() => {
    _isCourseDigital === true || _isCourseDigital === false
      ? _setIsCourseDigitalError(false)
      : _setIsCourseDigitalError(true);
  }, [_isCourseDigital]);

  /**
   * Validates newly inputted courseCapacity
   * @dependent courseId
   */
  useEffect(() => {
    courseCapacity.length > 0
      ? _setIsCourseCapacityError(false)
      : _setIsCourseCapacityError(true);
    // TODO - make sure its a valid number? HTML should take care of that. though I will validate again in the backend.
  }, [courseCapacity]);

  /**
   * Validates newly selected in class instructor
   * @dependent inClassInstructor
   */
  useEffect(() => {
    _courseInClassInstructor.length > 0
      ? _setIsCourseInClassInstructorError(false)
      : _setIsCourseInClassInstructorError(true);
  }, [_courseInClassInstructor]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseIdChange = (e) => {
    e.preventDefault();
    _setCourseId(e.target.value);
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseStartDateChange = (e) => {
    e.preventDefault();
    _setCourseStartDate(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseEndDateChange = (e) => {
    e.preventDefault();
    _setCourseEndDate(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleIsCourseDigitalChange = (e) => {
    e.preventDefault();
    _setIsCourseDigital(e.target.value);
  };

  /**
   * Updates the courseCapacity to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseCapacityChange = (e) => {
    e.preventDefault();
    _setCourseCapacity(e.target.value);
  };

  /**
   * Updates the inClassInstructor to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstructorChange = (value) => {
    _setCourseInClassInstructor(value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewCourseEntry = () => {
    // TODO - axios call to node backend that adds new course entry
    console.log(`axios call to backend, not implemented yet but button works!
    values:
    il ${isLoading}
    ${_setIsLoading}
    cid ${courseId}
    ${typeof courseId}
    ${isCourseIdError}
    csd ${courseStartDate}
    ${typeof courseStartDate}
    ${isCourseStartDateError}
    ced ${courseEndDate}
    ${typeof courseEndDate}
    ${isCourseEndDateError}
    cd ${_isCourseDigital}
    ${typeof _isCourseDigital}
    ${isCourseDigitalError}
    cc ${courseCapacity}
    ${typeof courseCapacity}
    ${isCourseCapacityError}
    ${_courseInClassInstructor}
    ${isCourseInClassInstructorError}
    `);
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  // /**
  //  *  Navigates back to the login screen if no process is currently running.
  //  */
  // const _navigateBack = () => {
  //   if (!isLoading) {
  //     history.goBack();
  //   }
  // };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,
    courseId,
    handleCourseIdChange,
    isCourseIdError,
    courseStartDate,
    handleCourseStartDateChange,
    isCourseStartDateError,
    courseEndDate,
    handleCourseEndDateChange,
    isCourseEndDateError,
    handleIsCourseDigitalChange,
    isCourseDigitalError,
    courseCapacity,
    handleCourseCapacityChange,
    isCourseCapacityError,
    handleInClassInstructorChange,
    isCourseInClassInstructorError,
    handleAddNewCourseEntry,
  };
};

export default useNewCourseScreen;
