import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewStudentScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  /**
   * ENUMS
   */

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

  const [uiModifiers, setUiModifiers] = useState({
    isLoading: true,
    isNewEntry: true,
    areFieldsEditable: true,
    failedToGetData: true,
    dataSaved: false,
  });

  /**
   * For error messages
   */

  const [errorVariables, setErrorVariables] = useState({
    showError: false,
    errorMessage: "",
  });

  /**
   * The items used to fill dropdown menus when dropdown menus options are dependant on  dynamic data
   */

  const [dropdownMenuOptions, setDropdownMenuOptions] = useState({
    courses: [],
    failedToGetCourses: false,

    products: [],
    failedToGetProducts: false,
  });

  /**
   * Date Selection Focus (used to only show date picker when text input is selected)
   */

  const [dateTextInputFocus, setDateTextInputFocus] = useState({
    isDateOfBirthFocus: false,
    isStudentDriversLicenseIssuedDateFocus: false,
  });

  /**
   * Variables to determine which option is preselected in dropdown menues
   */

  const [preSelectedDropdownOptions, setPreSelectedDropdownOptions] = useState({
    selectedGender: "label",
    selectedLicenseClass: "label",
    selectedRegisteredCourse: "label",
    selectedRegisteredProduct: "label",
  });

  /**
   * The object representing an entry in the database
   */

  const [studentObject, setStudentObject] = useState({
    studentFirstName: "",
    isStudentFirstNameError: true,

    studentMiddleName: "",
    isStudentMiddleNameError: false,

    studentLastName: "",
    isStudentLastNameError: true,

    studentDateOfBirth: "",
    isStudentDateOfBirthError: true,

    studentGender: "",
    isStudentGenderError: true,

    studentHeight: "",
    isStudentHeightError: false,

    studentCellPhoneNumber: "",
    isStudentCellPhoneNumberError: true,

    studentHomePhoneNumber: "",
    isStudentHomePhoneNumberError: true,

    studentAddress: "",
    isStudentAddressError: true,

    studentAddressApartmentNumber: "",
    isStudentAddressApartmentNumberError: false,

    studentAddressCity: "",
    isStudentAddressCityError: true,

    studentAddressPostalCode: "",
    isStudentAddressPostalCodeError: true,

    studentDriversLicenseNumber: "",
    isStudentDriversLicenseNumberError: true,

    studentDriversLicenseClass: "",
    isStudentDriversLicenseClassError: true,

    studentDriversLicenseNumberIssuedDate: "",
    isStudentDriversLicenseNumberIssuedDateError: true,

    studentDriversLicenseNumberExpDate: "",
    isStudentDriversLicenseNumberExpDateError: true,

    studentRegisteredCourseId: "",
    isStudentRegisteredCourseIdError: true,

    studentRegisteredProductId: "",
    isStudentRegisteredProductIdError: true,
  });

  /**
   * The state object of the screen
   */

  const studentState = {
    navigation,
    primary_key,

    Genders,
    LicenseClasses,

    uiModifiers,
    setUiModifiers,

    errorVariables,
    setErrorVariables,

    dropdownMenuOptions,
    setDropdownMenuOptions,

    dateTextInputFocus,
    setDateTextInputFocus,

    preSelectedDropdownOptions,
    setPreSelectedDropdownOptions,

    studentObject,
    setStudentObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    studentState,
  };
};

export default useNewStudentScreenStates;
