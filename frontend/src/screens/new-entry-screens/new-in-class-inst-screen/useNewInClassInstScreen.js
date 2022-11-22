import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateValid from "../../../components/helpers/isDateValid";
import axios from "axios"

const useNewInClassInstScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const [isLoading, _setIsLoading] = useState(false);

  const [inClassInstFirstName, _setInClassInstFirstName] = useState("");
  const [isInClassInstFirstNameError, _setIsInClassInstFirstNameError] =
    useState(true);

  const [inClassInstLastName, _setInClassInstLastName] = useState("");
  const [isInClassInstLastNameError, _setIsInClassInstLastNameError] =
    useState(true);

  const [inClassInstDriversLicense, _setInClassInstDriversLicense] =
    useState("");
  const [
    isInClassInstDriversLicenseError,
    _setIsInClassInstDriversLicenseError,
  ] = useState(true);

  const [
    inClassInstDriversLicenseExpDate,
    _setInClassInstDriversLicenseExpDate,
  ] = useState("");
  const [
    isInClassInstDriversLicenseExpDateError,
    _setIsInClassInstDriversLicenseExpDateError,
  ] = useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted inClassInstFirstName
   * @dependent inClassInstFirstName
   */
  useEffect(() => {
    inClassInstFirstName.length > 0
      ? _setIsInClassInstFirstNameError(false)
      : _setIsInClassInstFirstNameError(true);
  }, [inClassInstFirstName]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    inClassInstLastName.length > 0
      ? _setIsInClassInstLastNameError(false)
      : _setIsInClassInstLastNameError(true);
  }, [inClassInstLastName]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    inClassInstDriversLicense.length > 0
      ? _setIsInClassInstDriversLicenseError(false)
      : _setIsInClassInstDriversLicenseError(true);
  }, [inClassInstDriversLicense]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    inClassInstDriversLicenseExpDate.length > 0
      ? _setIsInClassInstDriversLicenseExpDateError(false)
      : _setIsInClassInstDriversLicenseExpDateError(true);
    _setIsInClassInstDriversLicenseExpDateError(
      !isDateValid(inClassInstDriversLicenseExpDate)
    );
  }, [inClassInstDriversLicenseExpDate]);

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
  const handleInClassInstFirstNameChange = (e) => {
    e.preventDefault();
    _setInClassInstFirstName(e.target.value);
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstLastNameChange = (e) => {
    e.preventDefault();
    _setInClassInstLastName(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstDriversLicenseChange = (e) => {
    e.preventDefault();
    _setInClassInstDriversLicense(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstDriversLicenseExpDateChange = (e) => {
    e.preventDefault();
    _setInClassInstDriversLicenseExpDate(e.target.value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewInClassInstructor = () => {
    axios.post(`http://localhost:4400/in-class-inst/add`, {
      inClassInstFirstName,
      inClassInstLastName,
      inClassInstDriversLicense,
      inClassInstDriversLicenseExpDate,
    });

    // // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${isLoading}
    // ${_setIsLoading}
    // icifn  ${inClassInstFirstName}
    // ${typeof inClassInstFirstName}
    // ${isInClassInstFirstNameError}
    // iciln ${inClassInstLastName}
    // ${typeof inClassInstLastName}
    // ${isInClassInstLastNameError}
    // icidl ${inClassInstDriversLicense}
    // ${typeof inClassInstDriversLicense}
    // ${isInClassInstDriversLicenseError}
    // icidled ${inClassInstDriversLicenseExpDate}
    // ${typeof inClassInstDriversLicenseExpDate}
    // ${isInClassInstDriversLicenseExpDateError}
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
    inClassInstFirstName,
    isInClassInstFirstNameError,
    handleInClassInstFirstNameChange,
    inClassInstLastName,
    isInClassInstLastNameError,
    handleInClassInstLastNameChange,
    inClassInstDriversLicense,
    isInClassInstDriversLicenseError,
    handleInClassInstDriversLicenseChange,
    inClassInstDriversLicenseExpDate,
    isInClassInstDriversLicenseExpDateError,
    handleInClassInstDriversLicenseExpDateChange,
    handleAddNewInClassInstructor,
  };
};

export default useNewInClassInstScreen;
