import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewCourseScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  /**
   * ENUMS
   */

  const CourseTypes = {
    DIGITAL: "Digital",
    IN_PERSON: "In Person",
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
    inClassInstructors: [],
    failedToGetInClassInstructors: false,
  });

  /**
   * Date Selection Focus (used to only show date picker when text input is selected)
   */

  const [dateTextInputFocus, setDateTextInputFocus] = useState({
    isStartDateFocus: false,
    isEndDateFocus: false,
  });

  /**
   * Variables to determine which option is preselected in dropdown menues
   */

  const [preSelectedDropdownOptions, setPreSelectedDropdownOptions] = useState({
    selectedCourseType: "label",
    selectedInstructor: "label",
  });

  /**
   * The object representing an entry in the database
   */

  const [courseObject, setCourseObject] = useState({
    courseId: "",
    isCourseIdError: true,

    courseCapacity: "",
    isCourseCapacityError: true,

    courseStartDate: "",
    isCourseStartDateError: true,

    courseEndDate: "",
    isCourseEndDateError: true,

    courseIsDigital: "",
    isCourseIsDigitalError: true,

    courseInClassInstructor: "",
    isCourseInClassInstructorError: true,
  });

  /**
   * The state object of the screen
   */

  const courseState = {
    navigation,
    primary_key,

    CourseTypes,

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

    courseObject,
    setCourseObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    courseState,
  };
};

export default useNewCourseScreenStates;
