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
  const [isStudentMiddleNameError, _setIsStudentMiddleNameError] =
    useState(true);

  const [studentLastName, _setStudentLastName] = useState("");
  const [isStudentLastNameError, _setIsStudentLastNameError] = useState(true);

  const [studentDateOfBirth, _setStudentDateOfBirth] = useState("");
  const [isStudentDateOfBirthError, _setIsStudentDateOfBirthError] =
    useState(true);

  const [studentGender, _setStudentGender] = useState(""); // should be 0 = M, 1 =F, 2 = Not Declared
  const [isStudentGenderError, _setIsStudentGenderError] = useState(true);

  const [studentCellPhoneNumber, _setStudentCellPhoneNumber] = useState("");
  const [isStudentCellPhoneNumberError, _setIsStudentCellPhoneNumberError] =
    useState(true);

  const [studentHomePhoneNumber, _setStudentHomePhoneNumber] = useState("");
  const [isStudentHomePhoneNumberError, _setIsStudentHomePhoneNumberError] =
    useState(true);

  const [studentAddress, _setStudentAddress] = useState("");
  const [isStudentAddressError, _setIsStudentAddressError] = useState(true);

  const [studentAddressCity, _setStudentAddressCity] = useState("");
  const [isStudentAddressCityError, _setIsStudentAddressCityError] =
    useState(true);

  const [studentAddressPostalCode, _setStudentAddressPostalCode] = useState("");
  const [isStudentAddressPostalCodeError, _setIsStudentAddressPostalCodeError] =
    useState(true);

  const [studentDriversLicenseNumber, _setStudentDriversLicenseNumber] =
    useState("");
  const [
    isStudentDriversLicenseNumberError,
    _setIsStudentDriversLicenseNumberError,
  ] = useState(true);

  const [
    studentDriversLicenseNumberIssuedDate,
    _setStudentDriversLicenseNumberIssuedDate,
  ] = useState("");
  const [
    isStudentDriversLicenseNumberIssuedDateError,
    _setIsStudentDriversLicenseNumberIssuedDateError,
  ] = useState(true);

  const [
    studentDriversLicenseNumberExpDate,
    _setStudentDriversLicenseNumberExpDate,
  ] = useState("");
  const [
    isStudentDriversLicenseNumberExpDateError,
    _setIsStudentDriversLicenseNumberExpDateError,
  ] = useState(true);

  const [studentRegisteredCourseId, _setStudentRegisteredCourseId] =
    useState("");
  const [
    isStudentRegisteredCourseIdError,
    _setIsStudentRegisteredCourseIdError,
  ] = useState(true);

  const [studentRegisteredProductId, _setStudentRegisteredProductId] =
    useState("");
  const [
    isStudentRegisteredProductIdError,
    _setIsStudentRegisteredProductIdError,
  ] = useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentFirstName.length > 0
      ? _setIsStudentFirstNameError(false)
      : _setIsStudentFirstNameError(true);
  }, [studentFirstName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentMiddleName.length > 0
      ? _setIsStudentMiddleNameError(false)
      : _setIsStudentMiddleNameError(true);
  }, [studentMiddleName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentLastName.length > 0
      ? _setIsStudentLastNameError(false)
      : _setIsStudentLastNameError(true);
  }, [studentLastName]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    studentDateOfBirth != null
      ? _setIsStudentDateOfBirthError(false)
      : _setIsStudentDateOfBirthError(true);
    _setIsStudentDateOfBirthError(!isDateValid(studentDateOfBirth));
  }, [studentDateOfBirth]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentGender.length > 0
      ? _setIsStudentGenderError(false)
      : _setIsStudentGenderError(true);
  }, [studentGender]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentCellPhoneNumber.length > 0
      ? _setIsStudentCellPhoneNumberError(false)
      : _setIsStudentCellPhoneNumberError(true);
  }, [studentCellPhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentHomePhoneNumber.length > 0
      ? _setIsStudentHomePhoneNumberError(false)
      : _setIsStudentHomePhoneNumberError(true);
  }, [studentHomePhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentAddress.length > 0
      ? _setIsStudentAddressError(false)
      : _setIsStudentAddressError(true);
  }, [studentAddress]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentAddressCity.length > 0
      ? _setIsStudentAddressCityError(false)
      : _setIsStudentAddressCityError(true);
  }, [studentAddressCity]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentDriversLicenseNumber.length > 0
      ? _setIsStudentDriversLicenseNumberError(false)
      : _setIsStudentDriversLicenseNumberError(true);
  }, [studentDriversLicenseNumber]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    studentDriversLicenseNumberIssuedDate != null
      ? _setIsStudentDriversLicenseNumberIssuedDateError(false)
      : _setIsStudentDriversLicenseNumberIssuedDateError(true);
    _setIsStudentDriversLicenseNumberIssuedDateError(
      !isDateValid(studentDriversLicenseNumberIssuedDate)
    );
  }, [studentDriversLicenseNumberIssuedDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    studentDriversLicenseNumberExpDate != null
      ? _setIsStudentDriversLicenseNumberExpDateError(false)
      : _setIsStudentDriversLicenseNumberExpDateError(true);
    _setIsStudentDriversLicenseNumberExpDateError(
      !isDateValid(studentDriversLicenseNumberExpDate)
    );
  }, [studentDriversLicenseNumberExpDate]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentRegisteredCourseId.length > 0
      ? _setIsStudentRegisteredCourseIdError(false)
      : _setIsStudentRegisteredCourseIdError(true);
  }, [studentRegisteredCourseId]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentRegisteredProductId.length > 0
      ? _setIsStudentRegisteredProductIdError(false)
      : _setIsStudentRegisteredProductIdError(true);
  }, [studentRegisteredProductId]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  // /**
  //  * Updates the courseId variable to contain the newly inputted value
  //  * @param value (string) The value inputted into the textInput
  //  */
  // const handleCourseIdChange = (e) => {
  //   e.preventDefault();
  //   _setCourseId(e.target.value);
  // };

  // /**
  //  * Updates the start date variable to contain the newly selected value
  //  * @param value (string) The value inputted into the textInput
  //  */
  // const handleCourseStartDateChange = (e) => {
  //   e.preventDefault();
  //   _setCourseStartDate(e.target.value);
  // };

  // /**
  //  * Updates the end date variable to contain the newly selected value
  //  * @param value (string) The value inputted into the textInput
  //  */
  // const handleCourseEndDateChange = (e) => {
  //   e.preventDefault();
  //   _setCourseEndDate(e.target.value);
  // };

  // /**
  //  * Updates the isDigital variable to contain the newly selected value
  //  * @param value (string) The value inputted into the textInput
  //  */
  // const handleIsCourseDigitalChange = (e) => {
  //   e.preventDefault();
  //   _setIsCourseDigital(e.target.value);
  // };

  // /**
  //  * Updates the courseCapacity to contain the newly inputted value
  //  * @param value (string) The value inputted into the textInput
  //  */
  // const handleCourseCapacityChange = (e) => {
  //   e.preventDefault();
  //   _setCourseCapacity(e.target.value);
  // };

  // /**
  //  * Updates the inClassInstructor to contain the newly selected value
  //  * @param value (string) The value inputted into the textInput
  //  */
  // const handleInClassInstructorChange = (value) => {
  //   _setCourseInClassInstructor(value);
  // };

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
  };
};

export default useNewCourseScreen;
