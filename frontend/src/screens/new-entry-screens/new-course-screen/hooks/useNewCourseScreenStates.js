import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertVariants from "../../../../domain/constants/AlertVariants";

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

  const [inClassInstructors, setInClassInstructors] = useState([]);
  const [failedToGetInClassInstructors, setFailedToGetInClassInstructors] = useState(false);

  const dropdownMenuOptionsObject = {
    inClassInstructors,
    setInClassInstructors,
    failedToGetInClassInstructors,
    setFailedToGetInClassInstructors,
  };

  /**
   * Date Selection Focus (used to only show date picker when text input is selected)
   */

  const [isStartDateFocus, setIsStartDateFocus] = useState(false);
  const [isEndDateFocus, setIsEndDateFocus] = useState(false);

  const dateTextInputFocusesObject = {
    isStartDateFocus,
    setIsStartDateFocus,

    isEndDateFocus,
    setIsEndDateFocus,
  };

 

  /**
   * The object representing an entry in the database
   */

  const [courseId, setCourseId] = useState("");
  const [isCourseIdError, setIsCourseIdError] = useState(true);

  const [courseCapacity, setCourseCapacity] = useState("");
  const [isCourseCapacityError, setIsCourseCapacityError] = useState(true);

  const [courseStartDate, setCourseStartDate] = useState("");
  const [isCourseStartDateError, setIsCourseStartDateError] = useState(true);

  const [courseEndDate, setCourseEndDate] = useState("");
  const [isCourseEndDateError, setIsCourseEndDateError] = useState(true);

  const [courseIsDigital, setCourseIsDigital] = useState("label");
  const [isCourseIsDigitalError, setIsCourseIsDigitalError] = useState(true);

  const [courseInClassInstructor, setCourseInClassInstructor] = useState("label");
  const [isCourseInClassInstructorError, setIsCourseInClassInstructorError] = useState(true);

  const courseObject = {
    courseId,
    setCourseId,
    isCourseIdError,
    setIsCourseIdError,

    courseCapacity,
    setCourseCapacity,
    isCourseCapacityError,
    setIsCourseCapacityError,

    courseStartDate,
    setCourseStartDate,
    isCourseStartDateError,
    setIsCourseStartDateError,

    courseEndDate,
    setCourseEndDate,
    isCourseEndDateError,
    setIsCourseEndDateError,

    courseIsDigital,
    setCourseIsDigital,
    isCourseIsDigitalError,
    setIsCourseIsDigitalError,

    courseInClassInstructor,
    setCourseInClassInstructor,
    isCourseInClassInstructorError,
    setIsCourseInClassInstructorError,
  };

  /**
   * The state object of the screen
   */

  const courseState = {
    navigation,
    primary_key,

    CourseTypes,

    uiModifiersObject,
    messageObject,
    dropdownMenuOptionsObject,
    dateTextInputFocusesObject,
    courseObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    courseState,
  };
};

export default useNewCourseScreenStates;
