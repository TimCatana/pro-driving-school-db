import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertVariants from "../../../../domain/constants/AlertVariants";

const useNewInCarInstructorScreenStates = () => {
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

  /**
   * Date Selection Focus (used to only show date picker when text input is selected)
   */

  const [isInstDriversLicenseFocus, setIsInstDriversLicenseFocus] = useState();
  const [isGDriversLicenseFocus, setIsGDriversLicenseFocus] = useState();

  const dateTextInputFocusesObject = {
    isInstDriversLicenseFocus,
    setIsInstDriversLicenseFocus,

    isGDriversLicenseFocus,
    setIsGDriversLicenseFocus,
  };

  /**
   * The object representing an entry in the database
   */

  const [firstName, setFirstName] = useState("");
  const [isFirstNameError, setIsFirstNameError] = useState(true);

  const [lastName, setLastName] = useState("");
  const [isLastNameError, setIsLastNameError] = useState(true);

  const [instDriversLicenseId, setInstDriversLicenseId] = useState("");
  const [isInstDriversLicenseIdError, setIsInstDriversLicenseIdError] = useState(true);

  const [instDriversLicenseExpDate, setInstDriversLicenseExpDate] = useState("");
  const [isInstDriversLicenseExpDateError, setIsInstDriversLicenseExpDateError] = useState(true);

  const [gDriversLicenseId, setGDriversLicenseId] = useState("");
  const [isGDriversLicenseIdError, setIsGDriversLicenseIdError] = useState(true);

  const [gDriversLicenseExpDate, setGDriversLicenseExpDate] = useState("");
  const [isGDriversLicenseExpDateError, setIsGDriversLicenseExpDateError] = useState(true);

  const inCarInstructorObject = {
    firstName,
    setFirstName,
    isFirstNameError,
    setIsFirstNameError,

    lastName,
    setLastName,
    isLastNameError,
    setIsLastNameError,

    instDriversLicenseId,
    setInstDriversLicenseId,
    isInstDriversLicenseIdError,
    setIsInstDriversLicenseIdError,

    instDriversLicenseExpDate,
    setInstDriversLicenseExpDate,
    isInstDriversLicenseExpDateError,
    setIsInstDriversLicenseExpDateError,

    gDriversLicenseId,
    setGDriversLicenseId,
    isGDriversLicenseIdError,
    setIsGDriversLicenseIdError,

    gDriversLicenseExpDate,
    setGDriversLicenseExpDate,
    isGDriversLicenseExpDateError,
    setIsGDriversLicenseExpDateError,
  };

  /**
   * The state object of the screen
   */

  const inCarInstructorState = {
    navigation,
    primary_key,

    uiModifiersObject,
    messageObject,
    dateTextInputFocusesObject,
    inCarInstructorObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { inCarInstructorState };
};

export default useNewInCarInstructorScreenStates;
