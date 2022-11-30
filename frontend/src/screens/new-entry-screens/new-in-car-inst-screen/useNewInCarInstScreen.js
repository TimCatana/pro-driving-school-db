import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateFormatYYYYMMDD from "../../../components/helpers/validators/isDateFormatYYYYMMDD";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const useNewInCarInstScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [isLoading, _setIsLoading] = useState(true);

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
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    if (primary_key != 0) {
      handleGetSpecificInCarInst();
    } else {
      _setIsLoading(false);
    }
  }, []);

  /**
   * Validates newly inputted inCarInstFirstName
   * @dependent inCarInstFirstName
   */
  useEffect(() => {
    inCarInstFirstName.length > 0 && inCarInstFirstName.length < 75
      ? _setIsInCarInstFirstNameError(false)
      : _setIsInCarInstFirstNameError(true);
  }, [inCarInstFirstName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstLastName.length > 0 && inCarInstLastName.length < 75
      ? _setIsInCarInstLastNameError(false)
      : _setIsInCarInstLastNameError(true);
  }, [inCarInstLastName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstDriversLicense.length > 0 && inCarInstDriversLicense.length < 100
      ? _setIsInCarInstDriversLicenseError(false)
      : _setIsInCarInstDriversLicenseError(true);
  }, [inCarInstDriversLicense]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(inCarInstDriversLicenseExpDate)
      ? _setIsInCarInstDriversLicenseExpDateError(false)
      : _setIsInCarInstDriversLicenseExpDateError(true);
  }, [inCarInstDriversLicenseExpDate]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstGLicense.length > 0 && inCarInstGLicense.length < 100
      ? _setIsInCarInstGLicenseError(false)
      : _setIsInCarInstGLicenseError(true);
  }, [inCarInstGLicense]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(inCarInstGLicenseExpDate)
      ? _setIsInCarInstGLicenseExpDateError(false)
      : _setIsInCarInstGLicenseExpDateError(true);
  }, [inCarInstGLicenseExpDate]);
  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInCarInst = async () => {
    _setIsLoading(true);
    const result = await axios.get(
      `http://localhost:4400/in-car-inst/getOne/${primary_key}`
    );

    if (result.data.status == 200) {
      _setInCarInstFirstName(result.data.query[0].first_name);
      _setInCarInstLastName(result.data.query[0].last_name);
      _setInCarInstDriversLicense(result.data.query[0].inst_drivers_license_id);
      _setInCarInstDriversLicenseExpDate(
        result.data.query[0].inst_drivers_license_exp_date
      );
      _setInCarInstGLicense(result.data.query[0].g_drivers_license_id);
      _setInCarInstGLicenseExpDate(
        result.data.query[0].g_drivers_license_exp_date
      );

      console.log(result.data.query[0]);
    } else {
      console.log(result.data);
    }

    _setIsLoading(false);
  };

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
    // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${isLoading}
    // ${_setIsLoading}
    // icifn  ${inCarInstFirstName}
    // ${typeof inCarInstFirstName}
    // ${isInCarInstFirstNameError}
    // iniln ${inCarInstLastName}
    // ${typeof inCarInstLastName}
    // ${isInCarInstLastNameError}
    // icidl ${inCarInstDriversLicense}
    // ${typeof inCarInstDriversLicense}
    // ${isInCarInstDriversLicenseError}
    // icidled ${inCarInstDriversLicenseExpDate}
    // ${typeof inCarInstDriversLicenseExpDate}
    // ${isInCarInstDriversLicenseExpDateError}
    // icigl ${inCarInstGLicense}
    // ${typeof inCarInstGLicense}
    // ${isInCarInstGLicenseError}
    // icigled ${inCarInstGLicenseExpDate}
    // ${typeof inCarInstGLicenseExpDate}
    // ${isInCarInstGLicenseExpDateError}
    // `);

    if (
      !isInCarInstFirstNameError &&
      !isInCarInstLastNameError &&
      !isInCarInstDriversLicenseError &&
      !isInCarInstDriversLicenseExpDateError &&
      !isInCarInstGLicenseError &&
      !isInCarInstGLicenseExpDateError
    ) {
      axios.post(`http://localhost:4400/in-car-inst/add`, {
        inCarInstFirstName,
        inCarInstLastName,
        inCarInstDriversLicense,
        inCarInstDriversLicenseExpDate,
        inCarInstGLicense,
        inCarInstGLicenseExpDate,
      });
    }
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

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInst = async () => {
    const result = await axios.delete(
      `http://localhost:4400/in-car-inst/delete/a`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
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
