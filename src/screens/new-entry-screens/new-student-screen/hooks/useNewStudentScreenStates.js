import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertVariants from "../../../../domain/constants/AlertVariants";

const useNewStudentScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();
  const initialRender = useRef(true);

  /**
   * ENUMS
   */

  const CanadaProvinces = {
    NL: "NL",
    PE: "PE",
    NS: "NS",
    NB: "NB",
    QC: "QC",
    ON: "ON",
    MB: "MB",
    SK: "SK",
    AB: "AB",
    BC: "BC",
    YT: "YT",
    NT: "NT",
    NU: "NU",
  };

  const Genders = {
    MALE: "Male",
    FEMALE: "Female",
    NOT_DECLARED: "Not Declared",
  };

  const LicenseClasses = {
    G1: "G1",
    G2: "G2",
    G: "G",
    M1: "M1",
    M2: "M2",
  };

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
   * The items used to fill dropdown menus when dropdown menus options are dependant on  dynamic data
   */

  const [courses, setCourses] = useState([]);
  const [failedToGetCourses, setFailedToGetCourses] = useState(false);

  const [products, setProducts] = useState([]);
  const [failedToGetProducts, setFailedToGetProducts] = useState(false);

  const dropdownMenuOptionsObject = {
    courses,
    setCourses,
    failedToGetCourses,
    setFailedToGetCourses,

    products,
    setProducts,
    failedToGetProducts,
    setFailedToGetProducts,
  };

  /**
   * Date Selection Focus (used to only show date picker when text input is selected)
   */

  const [isDateOfBirthFocus, setIsDateOfBirthFocus] = useState(false);
  const [isStudentDriversLicenseIssuedDateFocus, setIsStudentDriversLicenseIssuedDateFocus] = useState(false);

  const dateTextInputFocusesObject = {
    isDateOfBirthFocus,
    setIsDateOfBirthFocus,

    isStudentDriversLicenseIssuedDateFocus,
    setIsStudentDriversLicenseIssuedDateFocus,
  };

  /**
   * The object representing an entry in the database
   */

  const [studentFirstName, setStudentFirstName] = useState("");
  const [isStudentFirstNameError, setIsStudentFirstNameError] = useState(true);

  const [studentMiddleName, setStudentMiddleName] = useState("");
  const [isStudentMiddleNameError, setIsStudentMiddleNameError] = useState(true);

  const [studentLastName, setStudentLastName] = useState("");
  const [isStudentLastNameError, setIsStudentLastNameError] = useState(true);

  const [studentDateOfBirth, setStudentDateOfBirth] = useState("");
  const [isStudentDateOfBirthError, setIsStudentDateOfBirthError] = useState(true);

  const [studentGender, setStudentGender] = useState("label");
  const [isStudentGenderError, setIsStudentGenderError] = useState(true);

  const [studentHeight, setStudentHeight] = useState("");
  const [isStudentHeightError, setIsStudentHeightError] = useState(true);

  const [studentAddress, setStudentAddress] = useState("");
  const [isStudentAddressError, setIsStudentAddressError] = useState(true);

  const [studentAddressApartmentNumber, setStudentAddressApartmentNumber] = useState("");
  const [isStudentAddressApartmentNumberError, setIsStudentAddressApartmentNumberError] = useState(true);

  const [studentAddressCity, setStudentAddressCity] = useState("");
  const [isStudentAddressCityError, setIsStudentAddressCityError] = useState(true);

  const [studentAddressState, setStudentAddressState] = useState("label");
  const [isStudentAddressStateError, setIsStudentAddressStateError] = useState(true);

  const [studentAddressPostalCode, setStudentAddressPostalCode] = useState("");
  const [isStudentAddressPostalCodeError, setIsStudentAddressPostalCodeError] = useState(true);

  const [studentCellPhoneNumber, setStudentCellPhoneNumber] = useState("");
  const [isStudentCellPhoneNumberError, setIsStudentCellPhoneNumberError] = useState(true);

  const [studentHomePhoneNumber, setStudentHomePhoneNumber] = useState("");
  const [isStudentHomePhoneNumberError, setIsStudentHomePhoneNumberError] = useState(true);

  const [studentDriversLicenseId, setStudentDriversLicenseId] = useState("");
  const [isStudentDriversLicenseIdError, setIsStudentDriversLicenseNumberId] = useState(true);

  const [studentDriversLicenseClass, setStudentDriversLicenseClass] = useState("");
  const [isStudentDriversLicenseClassError, setIsStudentDriversLicenseClassError] = useState(true);

  const [studentDriversLicenseIssuedDate, setStudentDriversLicenseIssuedDate] = useState("");
  const [isStudentDriversLicenseIssuedDateError, setIsStudentDriversLicenseIssuedDateError] = useState(true);

  const [studentDriversLicenseExpDate, setStudentDriversLicenseExpDate] = useState("");
  const [isStudentDriversLicenseExpDateError, setIsStudentDriversLicenseExpDateError] = useState(true);

  const [studentRegisteredCourseId, setStudentRegisteredCourseId] = useState("label");
  const [isStudentRegisteredCourseIdError, setIsStudentRegisteredCourseIdError] = useState(true);

  const [studentPurchasedProductId, setStudentPurchasedProductId] = useState("label");
  const [isStudentPurchasedProductIdError, setIsStudentPurchasedProductIdError] = useState(true);

  /**
   * The object representing an entry in the database
   */

  const studentObject = {
    studentFirstName,
    setStudentFirstName,
    isStudentFirstNameError,
    setIsStudentFirstNameError,

    studentMiddleName,
    setStudentMiddleName,
    isStudentMiddleNameError,
    setIsStudentMiddleNameError,

    studentLastName,
    setStudentLastName,
    isStudentLastNameError,
    setIsStudentLastNameError,

    studentDateOfBirth,
    setStudentDateOfBirth,
    isStudentDateOfBirthError,
    setIsStudentDateOfBirthError,

    studentGender,
    setStudentGender,
    isStudentGenderError,
    setIsStudentGenderError,

    studentHeight,
    setStudentHeight,
    isStudentHeightError,
    setIsStudentHeightError,

    studentAddress,
    setStudentAddress,
    isStudentAddressError,
    setIsStudentAddressError,

    studentAddressApartmentNumber,
    setStudentAddressApartmentNumber,
    isStudentAddressApartmentNumberError,
    setIsStudentAddressApartmentNumberError,

    studentAddressCity,
    setStudentAddressCity,
    isStudentAddressCityError,
    setIsStudentAddressCityError,

    studentAddressState,
    setStudentAddressState,
    isStudentAddressStateError,
    setIsStudentAddressStateError,

    studentAddressPostalCode,
    setStudentAddressPostalCode,
    isStudentAddressPostalCodeError,
    setIsStudentAddressPostalCodeError,

    studentCellPhoneNumber,
    setStudentCellPhoneNumber,
    isStudentCellPhoneNumberError,
    setIsStudentCellPhoneNumberError,

    studentHomePhoneNumber,
    setStudentHomePhoneNumber,
    isStudentHomePhoneNumberError,
    setIsStudentHomePhoneNumberError,

    studentDriversLicenseId,
    setStudentDriversLicenseId,
    isStudentDriversLicenseIdError,
    setIsStudentDriversLicenseNumberId,

    studentDriversLicenseClass,
    setStudentDriversLicenseClass,
    isStudentDriversLicenseClassError,
    setIsStudentDriversLicenseClassError,

    studentDriversLicenseIssuedDate,
    setStudentDriversLicenseIssuedDate,
    isStudentDriversLicenseIssuedDateError,
    setIsStudentDriversLicenseIssuedDateError,

    studentDriversLicenseExpDate,
    setStudentDriversLicenseExpDate,
    isStudentDriversLicenseExpDateError,
    setIsStudentDriversLicenseExpDateError,

    studentRegisteredCourseId,
    setStudentRegisteredCourseId,
    isStudentRegisteredCourseIdError,
    setIsStudentRegisteredCourseIdError,

    studentPurchasedProductId,
    setStudentPurchasedProductId,
    isStudentPurchasedProductIdError,
    setIsStudentPurchasedProductIdError,
  };
  /**
   * The state object of the screen
   */

  const studentState = {
    navigation,
    primary_key,
    initialRender,

    Genders,
    LicenseClasses,
    CanadaProvinces,

    uiModifiersObject,
    messageObject,
    dropdownMenuOptionsObject,
    dateTextInputFocusesObject,
    studentObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    studentState,
  };
};

export default useNewStudentScreenStates;
