import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateValid from "../../../components/helpers/isDateValid";
import axios from "axios";

const useNewInCarInstScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const [isLoading, _setIsLoading] = useState(false);

  const [inCarInstFirstName, _setInCarInstFirstName] = useState("");
  const [isInCarInstFirstNameError, _setIsInCarInstFirstNameError] =
    useState(true);

  const [inCarInstLastName, _setInCarInstLastName] = useState("");
  const [isInCarInstLastNameError, _setIsInCarInstLastNameError] =
    useState(true);

  const [inCarInstDriversLicense, _setInCarInstDriversLicense] = useState("");
  const [isInCarInstDriversLicenseError, _setIsInCarInstDriversLicenseError] =
    useState(true);

  const [inCarInstDriversLicenseExpDate, _setInCarInstDriversLicenseExpDate] =
    useState("");
  const [
    isInCarInstDriversLicenseExpDateError,
    _setIsInCarInstDriversLicenseExpDateError,
  ] = useState(true);

  const [inCarInstGLicense, _setInCarInstGLicense] = useState("");
  const [isInCarInstGLicenseError, _setIsInCarInstGLicenseError] =
    useState(true);

  const [inCarInstGLicenseExpDate, _setInCarInstGLicenseExpDate] = useState("");
  const [isInCarInstGLicenseExpDateError, _setIsInCarInstGLicenseExpDateError] =
    useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted inCarInstFirstName
   * @dependent inCarInstFirstName
   */
  useEffect(() => {
    inCarInstFirstName.length > 0
      ? _setIsInCarInstFirstNameError(false)
      : _setIsInCarInstFirstNameError(true);
  }, [inCarInstFirstName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstLastName.length > 0
      ? _setIsInCarInstLastNameError(false)
      : _setIsInCarInstLastNameError(true);
  }, [inCarInstLastName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstDriversLicense.length > 0
      ? _setIsInCarInstDriversLicenseError(false)
      : _setIsInCarInstDriversLicenseError(true);
  }, [inCarInstDriversLicense]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstDriversLicenseExpDate.length > 0
      ? _setIsInCarInstDriversLicenseExpDateError(false)
      : _setIsInCarInstDriversLicenseExpDateError(true);
    _setIsInCarInstDriversLicenseExpDateError(
      !isDateValid(inCarInstDriversLicenseExpDate)
    );
  }, [inCarInstDriversLicenseExpDate]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstGLicense.length > 0
      ? _setIsInCarInstGLicenseError(false)
      : _setIsInCarInstGLicenseError(true);
  }, [inCarInstGLicense]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstGLicenseExpDate.length > 0
      ? _setIsInCarInstGLicenseExpDateError(false)
      : _setIsInCarInstGLicenseExpDateError(true);
    _setIsInCarInstGLicenseExpDateError(!isDateValid(inCarInstGLicenseExpDate));
  }, [inCarInstGLicenseExpDate]);
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
  const handleInCarInstFirstNameChange = (e) => {
    e.preventDefault();
    _setInCarInstFirstName(e.target.value);
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstLastNameChange = (e) => {
    e.preventDefault();
    _setInCarInstLastName(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstDriversLicenseChange = (e) => {
    e.preventDefault();
    _setInCarInstDriversLicense(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstDriversLicenseExpDateChange = (e) => {
    e.preventDefault();
    _setInCarInstDriversLicenseExpDate(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstGLicenseChange = (e) => {
    e.preventDefault();
    _setInCarInstGLicense(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInCarInstGLicenseExpDateChange = (e) => {
    e.preventDefault();
    _setInCarInstGLicenseExpDate(e.target.value);
  };
  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewInCarInstructor = () => {
    axios.post(`http://localhost:4400/in-car-inst/add`, {
      inCarInstFirstName,
      inCarInstLastName,
      inCarInstDriversLicense,
      inCarInstDriversLicenseExpDate,
      inCarInstGLicense,
      inCarInstGLicenseExpDate,
    });

    // // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${isLoading}
    // ${_setIsLoading}
    // icifn  ${inCarInstFirstName}
    // ${typeof inCarInstFirstName}
    // ${isInCarInstFirstNameError}
    // csd ${inCarInstLastName}
    // ${typeof inCarInstLastName}
    // ${isInCarInstLastNameError}
    // dl ${inCarInstDriversLicense}
    // ${typeof inCarInstDriversLicense}
    // ${isInCarInstDriversLicenseError}
    // dled ${inCarInstDriversLicenseExpDate}
    // ${typeof inCarInstDriversLicenseExpDate}
    // ${isInCarInstDriversLicenseExpDateError}
    // gl ${inCarInstGLicense}
    // ${typeof inCarInstGLicense}
    // ${isInCarInstGLicenseError}
    // gled ${inCarInstGLicenseExpDate}
    // ${typeof inCarInstGLicenseExpDate}
    // ${isInCarInstGLicenseExpDateError}
    // `);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditInCarInstEntry = () => {
    axios.put(`http://localhost:4400/in-car-inst/edit/1`, {
      inCarInstFirstName,
      inCarInstLastName,
      inCarInstDriversLicense,
      inCarInstDriversLicenseExpDate,
      inCarInstGLicense,
      inCarInstGLicenseExpDate,
    });
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
    inCarInstFirstName,
    isInCarInstFirstNameError,
    handleInCarInstFirstNameChange,
    inCarInstLastName,
    isInCarInstLastNameError,
    handleInCarInstLastNameChange,
    inCarInstDriversLicense,
    isInCarInstDriversLicenseError,
    handleInCarInstDriversLicenseChange,
    inCarInstDriversLicenseExpDate,
    isInCarInstDriversLicenseExpDateError,
    handleInCarInstDriversLicenseExpDateChange,
    inCarInstGLicense,
    isInCarInstGLicenseError,
    handleInCarInstGLicenseChange,
    inCarInstGLicenseExpDate,
    isInCarInstGLicenseExpDateError,
    handleInCarInstGLicenseExpDateChange,
    handleAddNewInCarInstructor,
    handleEditInCarInstEntry,
  };
};

export default useNewInCarInstScreen;
