import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateValid from "../../../components/helpers/isDateValid";
import axios from "axios";

const useNewStudentScreen = () => {
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
    studentAddressPostalCode.length > 0
      ? _setIsStudentAddressPostalCodeError(false)
      : _setIsStudentAddressPostalCodeError(true);
  }, [studentAddressPostalCode]);

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
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentFirstNameChange = (e) => {
    e.preventDefault();
    _setStudentFirstName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentMiddleNameChange = (e) => {
    e.preventDefault();
    _setStudentMiddleName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentLastNameChange = (e) => {
    e.preventDefault();
    _setStudentLastName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDateOfBirthChange = (e) => {
    e.preventDefault();
    _setStudentDateOfBirth(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentGenderChange = (e) => {
    e.preventDefault();
    _setStudentGender(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentCellPhoneNumberChange = (e) => {
    e.preventDefault();
    _setStudentCellPhoneNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentHomePhoneNumberChange = (e) => {
    e.preventDefault();
    _setStudentHomePhoneNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressChange = (e) => {
    e.preventDefault();
    _setStudentAddress(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressCityChange = (e) => {
    e.preventDefault();
    _setStudentAddressCity(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressPostalCodeChange = (e) => {
    e.preventDefault();
    _setStudentAddressPostalCode(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberChange = (e) => {
    e.preventDefault();
    _setStudentDriversLicenseNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberIssuedDateChange = (e) => {
    e.preventDefault();
    _setStudentDriversLicenseNumberIssuedDate(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberExpDateChange = (e) => {
    e.preventDefault();
    _setStudentDriversLicenseNumberExpDate(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentRegisteredCourseId = (e) => {
    e.preventDefault();
    _setStudentRegisteredCourseId(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentRegisteredProductId = (e) => {
    e.preventDefault();
    _setStudentRegisteredProductId(e.target.value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewStudentEntry = () => {
    axios.post(`http://localhost:4400/student/add`, {
      studentFirstName,
      studentMiddleName,
      studentLastName,
      studentDateOfBirth,
      studentGender,
      studentCellPhoneNumber,
      studentHomePhoneNumber,
      studentAddress,
      studentAddressCity,
      studentAddressPostalCode,
      studentDriversLicenseNumber,
      studentDriversLicenseNumberIssuedDate,
      studentDriversLicenseNumberExpDate,
      studentRegisteredCourseId,
      studentRegisteredProductId,
    });
    //   // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${isLoading}
    // ${_setIsLoading}
    // sfn ${studentFirstName}
    // ${typeof studentFirstName}
    // ${isStudentFirstNameError}
    // smn ${studentMiddleName}
    // ${typeof studentMiddleName}
    // ${isStudentMiddleNameError}
    // sln ${studentLastName}
    // ${typeof studentLastName}
    // ${isStudentLastNameError}
    // sdob ${studentDateOfBirth}
    // ${typeof studentDateOfBirth}
    // ${isStudentDateOfBirthError}
    // sg ${studentGender}
    // ${typeof studentGender}
    // ${isStudentGenderError}
    // scp ${studentCellPhoneNumber}
    // ${typeof studentCellPhoneNumber}
    // ${isStudentCellPhoneNumberError}
    // shp ${studentHomePhoneNumber}
    // ${typeof studentHomePhoneNumber}
    // ${isStudentHomePhoneNumberError}
    // sa ${studentAddress}
    // ${typeof studentAddress}
    // ${isStudentAddressError}
    // sac ${studentAddressCity}
    // ${typeof studentAddressCity}
    // ${isStudentAddressCityError}
    // sapc ${studentAddressPostalCode}
    // ${typeof studentAddressPostalCode}
    // ${isStudentAddressPostalCodeError}
    // sdln ${studentDriversLicenseNumber}
    // ${typeof studentDriversLicenseNumber}
    // ${isStudentDriversLicenseNumberError}
    // sdlid ${studentDriversLicenseNumberIssuedDate}
    // ${typeof studentDriversLicenseNumberIssuedDate}
    // ${isStudentDriversLicenseNumberIssuedDateError}
    // sg ${studentDriversLicenseNumberExpDate}
    // ${typeof studentDriversLicenseNumberExpDate}
    // ${isStudentDriversLicenseNumberExpDateError}
    // src ${studentRegisteredCourseId}
    // ${typeof studentRegisteredCourseId}
    // ${isStudentRegisteredCourseIdError}
    // srp ${studentRegisteredProductId}
    // ${typeof studentRegisteredProductId}
    // ${isStudentRegisteredProductIdError}
    // `);
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

    studentFirstName,
    isStudentFirstNameError,
    handleStudentFirstNameChange,

    studentMiddleName,
    isStudentMiddleNameError,
    handleStudentMiddleNameChange,

    studentLastName,
    isStudentLastNameError,
    handleStudentLastNameChange,

    studentDateOfBirth,
    isStudentDateOfBirthError,
    handleStudentDateOfBirthChange,

    studentGender,
    isStudentGenderError,
    handleStudentGenderChange,

    studentCellPhoneNumber,
    isStudentCellPhoneNumberError,
    handleStudentCellPhoneNumberChange,

    studentHomePhoneNumber,
    isStudentHomePhoneNumberError,
    handleStudentHomePhoneNumberChange,

    studentAddress,
    isStudentAddressError,
    handleStudentAddressChange,

    studentAddressCity,
    isStudentAddressCityError,
    handleStudentAddressCityChange,

    studentAddressPostalCode,
    isStudentAddressPostalCodeError,
    handleStudentAddressPostalCodeChange,

    studentDriversLicenseNumber,
    isStudentDriversLicenseNumberError,
    handleStudentDriversLicenseNumberChange,

    studentDriversLicenseNumberIssuedDate,
    isStudentDriversLicenseNumberIssuedDateError,
    handleStudentDriversLicenseNumberIssuedDateChange,

    studentDriversLicenseNumberExpDate,
    isStudentDriversLicenseNumberExpDateError,
    handleStudentDriversLicenseNumberExpDateChange,

    studentRegisteredCourseId,
    isStudentRegisteredCourseIdError,
    handleStudentRegisteredCourseId,

    studentRegisteredProductId,
    isStudentRegisteredProductIdError,
    handleStudentRegisteredProductId,

    handleAddNewStudentEntry,
  };
};

export default useNewStudentScreen;
