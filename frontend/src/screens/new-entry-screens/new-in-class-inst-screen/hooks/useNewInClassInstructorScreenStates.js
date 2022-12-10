import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertVariants from "../../../../domain/constants/AlertVariants";

const useNewInClassInstructorScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  /**
   * Parameters that change the UI based on their value
   */

  const [isLoading, setIsLoading] = useState(true);
  const [isNewEntry, setIsNewEntry] = useState(true);
  const [areFieldsEditable, setAreFieldsEditable] = useState(true);
  const [failedToGetData, setFailedToGetData] = useState(true);
  const [dataSaved, setDataSaved] = useState(false);

  const uiModifiersObject = {
    isLoading,
    setIsLoading,

    isNewEntry,
    setIsNewEntry,

    areFieldsEditable,
    setAreFieldsEditable,

    failedToGetData,
    setFailedToGetData,

    dataSaved,
    setDataSaved,
  };

  /**
   * For error messages
   */

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState(AlertVariants.DANGER);

  const messageObject = {
    showMessage,
    setShowMessage,
    message,
    setMessage,
    messageColor,
    setMessageColor,
  };

  /**
   * Date Selection Focus (used to only show date picker when text input is selected)
   */

  const [isInstDriversLicenseFocus, setIsInstDriversLicenseFocus] = useState(false);

  const dateTextInputFocusesObject = {
    isInstDriversLicenseFocus,
    setIsInstDriversLicenseFocus,
  };

  /**
   * The object representing an entry in the database
   */

  const [firstName, setFirstName] = useState("");
  const [isFirstNameError, setIsFirstNameError] = useState(true);

  const [lastName, setLastName] = useState("");
  const [isLastNameError, setIsLastNameError] = useState(true);

  const [driversLicenseId, setDriversLicenseId] = useState("");
  const [isDriversLicenseIdError, setIsDriversLicenseIdError] = useState(true);

  const [driversLicenseExpDate, setDriversLicenseExpDate] = useState("");
  const [isDriversLicenseExpDateError, setIsDriversLicenseExpDateError] = useState(true);

  const inClassInstructorObject = {
    firstName,
    setFirstName,
    isFirstNameError,
    setIsFirstNameError,

    lastName,
    setLastName,
    isLastNameError,
    setIsLastNameError,

    driversLicenseId,
    setDriversLicenseId,
    isDriversLicenseIdError,
    setIsDriversLicenseIdError,

    driversLicenseExpDate,
    setDriversLicenseExpDate,
    isDriversLicenseExpDateError,
    setIsDriversLicenseExpDateError,
  };

  /**
   * The state object of the screen
   */

  const inClassInstructorState = {
    navigation,
    primary_key,

    uiModifiersObject,
    messageObject,
    dateTextInputFocusesObject,
    inClassInstructorObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inClassInstructorState,
  };
};

export default useNewInClassInstructorScreenStates;
