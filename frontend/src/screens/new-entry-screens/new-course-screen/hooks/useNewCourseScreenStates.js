import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewCourseScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [inClassInstructors, setInClassInstructors] = useState("");
  const [isNewEntry, setIsNewEntry] = useState(true);

  const [selectedCourseType, setSelectedCourseType] = useState("label");
  const [selectedInstructor, setSelectedInstructor] = useState("label");

  const [isStartDateFocus, setIsStartDateFocus] = useState(false);
  const [isEndDateFocus, setIsEndDateFocus] = useState(false);

  const [courseSaved, setCourseSaved] = useState(false);

  const CourseTypes = {
    DIGITAL: "Digital",
    IN_PERSON: "In Person",
  };

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

  const courseState = {
    navigation,
    primary_key,

    isLoading,
    setIsLoading,
    inClassInstructors,
    setInClassInstructors,
    isNewEntry,
    setIsNewEntry,

    selectedCourseType,
    setSelectedCourseType,
    selectedInstructor,
    setSelectedInstructor,

    isStartDateFocus,
    setIsStartDateFocus,
    isEndDateFocus,
    setIsEndDateFocus,

    courseSaved,
    setCourseSaved,

    CourseTypes,

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
