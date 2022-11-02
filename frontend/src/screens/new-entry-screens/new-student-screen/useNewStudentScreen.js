import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateValid from "../../../components/helpers/isDateValid";

const useNewCourseScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const [isLoading, _setIsLoading] = useState(false);

  const [studentFirstName, _setStudentFirstName] = useState("");
  const [isStudentFirstNameError, _setIsStudentFirstNameError] = useState(true);

  const [studentMiddleName, _setStudentMiddleName] = useState("");
  const [isStudentMiddleNameError, _setIsStudentMiddleNameError] = useState(true);
  
  const [studentLastName, _setStudentLastName] = useState("");
  const [isStudentLastNameError, _setIsStudentLastNameError] = useState(true);

  const [studentDateOfBirth, _setStudentDateOfBirth] = useState("");
  const [isStudentDateOfBirthError, _setIsStudentDateOfBirthError] = useState(true);

  const [studentGender, _setStudentGender] = useState(""); // should be 0 = M, 1 =F, 2 = Not Declared
  const [isStudentGenderError, _setIsStudentGenderError] = useState(true);

  const [studentCellPhoneNumber, _setStudentCellPhoneNumber] = useState("");
  const [isStudentCellPhoneNumberError, _setIsStudentCellPhoneNumberError] = useState(true);
  
  const [studentHomePhoneNumber, _setStudentHomePhoneNumber] = useState("");
  const [isStudentHomePhoneNumberError, _setIsStudentHomePhoneNumberError] = useState(true);
  
  const [studentAddress, _setStudentAddress] = useState("");
  const [isStudentAddressError, _setIsStudentAddressError] = useState(true);
  
  const [studentAddressCity, _setStudentAddressCity] = useState("");
  const [isStudentAddressCityError, _setIsStudentAddressCityError] = useState(true);
  
  const [studentAddressPostalCode, _setStudentAddressPostalCode] = useState("");
  const [isStudentAddressPostalCodeError, _setIsStudentAddressPostalCodeError] = useState(true);
  
  const [studentDriversLicenseNumber, _setStudentDriversLicenseNumber] = useState("");
  const [isStudentDriversLicenseNumberError, _setIsStudentDriversLicenseNumberError] = useState(true);
 
  const [studentDriversLicenseNumberIssuedDate, _setStudentDriversLicenseNumberIssuedDate] = useState("");
  const [isStudentDriversLicenseNumberErrorIssuedDate, _setIsStudentDriversLicenseNumberErrorIssuedDate] = useState(true);
 
  const [studentDriversLicenseNumberExpDate, _setStudentDriversLicenseNumberExpDate] = useState("");
  const [isStudentDriversLicenseNumberExpDateError, _setIsStudentDriversLicenseNumberExpDateError] = useState(true);
 
  const [studentRegisteredCourseId, _setStudentRegisteredCourseId] = useState("");
  const [isStudentRegisteredCourseIdError, _setIsStudentRegisteredCourseIdError] = useState(true);
 
  const [studentRegisteredProductId, _setStudentRegisteredProductId] = useState("");
  const [isStudentRegisteredProductIdError, _setIsStudentRegisteredProductIdError] = useState(true);

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
