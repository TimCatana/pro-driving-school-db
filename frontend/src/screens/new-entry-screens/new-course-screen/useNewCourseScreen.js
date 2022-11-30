import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  isDateFuture,
  isDateFormatYYYYMMDD,
  isNumber,
  isEndDateFuture,
  isValidDate,
} from "../../../components/helpers/validators";
import axios from "axios";

const useNewCourseScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const CourseTypes = {
    DIGITAL: "Digital",
    IN_PERSON: "In Person",
  };

  const navigation = useNavigate();
  const { primary_key } = useParams();
  const [inClassInstructors, _setInClassInstructors] = useState("");

  const [isLoading, _setIsLoading] = useState(true);

  const [courseId, _setCourseId] = useState("");
  const [isCourseIdError, _setIsCourseIdError] = useState(true);

  const [courseStartDate, _setCourseStartDate] = useState("");
  const [isCourseStartDateError, _setIsCourseStartDateError] = useState(true);

  const [courseEndDate, _setCourseEndDate] = useState("");
  const [isCourseEndDateError, _setIsCourseEndDateError] = useState(true);

  const [_isCourseDigital, _setIsCourseDigital] = useState("");
  const [isCourseDigitalError, _setIsCourseDigitalError] = useState(true);

  const [courseCapacity, _setCourseCapacity] = useState("");
  const [isCourseCapacityError, _setIsCourseCapacityError] = useState(true);

  const [courseInClassInstructor, _setCourseInClassInstructor] = useState("");
  const [isCourseInClassInstructorError, _setIsCourseInClassInstructorError] =
    useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/
  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    handleGetInClassInstructors();
    // if no instructors, need to show message saying that instructors need to be added

    if (primary_key != 0) {
      handleGetSpecificCourse();
    }
  }, []);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    if (isNumber(courseId)) {
      parseInt(courseId) > -1
        ? _setIsCourseIdError(false)
        : _setIsCourseIdError(true);
    } else {
      _setIsCourseIdError(true);
    }
  }, [courseId]);

  /**
   * Validates newly inputted courseCapacity
   * @dependent courseId
   */
  useEffect(() => {
    if (isNumber(courseCapacity)) {
      parseInt(courseCapacity) > -1
        ? _setIsCourseCapacityError(false)
        : _setIsCourseCapacityError(true);
    } else {
      _setIsCourseCapacityError(true);
    }
  }, [courseCapacity]);

  /**
   * Validates newly selected start date
   * @dependent courseStartDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(courseStartDate)) {
      isDateFuture(courseStartDate)
        ? _setIsCourseStartDateError(false)
        : _setIsCourseStartDateError(true);

      isEndDateFuture(courseStartDate, courseEndDate) // date validation is done within function therefore is end date isn't selected then should return false
        ? _setIsCourseEndDateError(false)
        : _setIsCourseEndDateError(true);
    } else {
      _setIsCourseStartDateError(true);
    }
  }, [courseStartDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(courseEndDate)) {
      if (isValidDate(courseStartDate)) {
        if (
          isDateFuture(courseEndDate) &&
          isEndDateFuture(courseStartDate, courseEndDate)
        ) {
          _setIsCourseEndDateError(false);
        } else {
          _setIsCourseEndDateError(true);
        }
      } else {
        isDateFuture(courseEndDate)
          ? _setIsCourseEndDateError(false)
          : _setIsCourseEndDateError(true);
      }
    } else {
      _setIsCourseEndDateError(true);
    }
  }, [courseEndDate]);

  /**
   * Validates newly selected is class digital or in person option
   * @dependent isDigital
   */
  useEffect(() => {
    _isCourseDigital == CourseTypes.DIGITAL ||
    _isCourseDigital == CourseTypes.IN_PERSON
      ? _setIsCourseDigitalError(false)
      : _setIsCourseDigitalError(true);
  }, [_isCourseDigital]);

  /**
   * Validates newly selected in class instructor
   * @dependent inClassInstructor
   */
  useEffect(() => {
    if (isNumber(courseInClassInstructor)) {
      inClassInstructors.some(
        (element) => element.id == courseInClassInstructor
      )
        ? _setIsCourseInClassInstructorError(false)
        : _setIsCourseInClassInstructorError(true);
    } else {
      _setIsCourseInClassInstructorError(true);
    }
  }, [courseInClassInstructor]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificCourse = async () => {
    _setIsLoading(true);
    const result = await axios.get(
      `http://localhost:4400/course/getOne/${primary_key}`
    );

    if (result.data.status == 200) {
      _setCourseId(result.data.query[0].courseId);
      _setCourseCapacity(result.data.query[0].capacity);
      _setCourseStartDate(result.data.query[0].start_date);
      _setCourseEndDate(result.data.query[0].end_date);
      // _setIsCourseDigital // TODO - change this to int not bit cause bit returns an array and it gets to messy
      _setCourseInClassInstructor(result.data.query[0].in_class_instructor_id);

      console.log(result.data.query[0]);
    } else {
      console.log(result.data);
    }

    _setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    _setIsLoading(true);
    const result = await axios.get(
      `http://localhost:4400/in-class-inst/getAll`
    );

    if (result.data.status == 200) {
      _setInClassInstructors(result.data.query);
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
  const handleCourseIdChange = (e) => {
    e.preventDefault();
    _setCourseId(e.target.value);
  };

  /**
   * Updates the start date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseStartDateChange = (e) => {
    e.preventDefault();
    _setCourseStartDate(e.target.value);
  };

  /**
   * Updates the end date variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseEndDateChange = (e) => {
    e.preventDefault();
    _setCourseEndDate(e.target.value);
  };

  /**
   * Updates the isDigital variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleIsCourseDigitalChange = (e) => {
    e.preventDefault();
    _setIsCourseDigital(e.target.value);
  };

  /**
   * Updates the courseCapacity to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleCourseCapacityChange = (e) => {
    e.preventDefault();
    _setCourseCapacity(e.target.value);
  };

  /**
   * Updates the inClassInstructor to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleInClassInstructorChange = (e) => {
    _setCourseInClassInstructor(e.target.value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewCourseEntry = () => {
    // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${isLoading}
    // ${_setIsLoading}
    // cid ${courseId}
    // ${typeof courseId}
    // ${isCourseIdError}
    // cc ${courseCapacity}
    // ${typeof courseCapacity}
    // ${isCourseCapacityError}
    // csd ${courseStartDate}
    // ${typeof courseStartDate}
    // ${isCourseStartDateError}
    // ced ${courseEndDate}
    // ${typeof courseEndDate}
    // ${isCourseEndDateError}
    // cd ${_isCourseDigital}
    // ${typeof _isCourseDigital}
    // ${isCourseDigitalError}
    // cici ${courseInClassInstructor}
    // ${isCourseInClassInstructorError}
    // `);

    // console.log(courseId);
    // console.log(courseStartDate);
    // console.log(courseEndDate);
    // console.log(_isCourseDigital);
    // console.log(courseCapacity);
    // console.log(courseInClassInstructor);

    if (
      !isCourseIdError &&
      !isCourseCapacityError &&
      !isCourseStartDateError &&
      !isCourseEndDateError &&
      !isCourseDigitalError &&
      !isCourseInClassInstructorError
    ) {
      axios.post(`http://localhost:4400/course/add`, {
        courseId,
        courseStartDate,
        courseEndDate,
        _isCourseDigital,
        courseCapacity,
        courseInClassInstructor,
      });
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditCourseEntry = () => {
    axios.put(`http://localhost:4400/course/edit/1`, {
      courseId,
      courseStartDate,
      courseEndDate,
      _isCourseDigital,
      courseCapacity,
      courseInClassInstructor,
    });
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteCourse = async () => {
    const result = await axios.delete(
      `http://localhost:4400/course/delete/23424`
    );

    console.log(result.data);

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
    courseId,
    handleCourseIdChange,
    isCourseIdError,
    courseStartDate,
    handleCourseStartDateChange,
    isCourseStartDateError,
    courseEndDate,
    handleCourseEndDateChange,
    isCourseEndDateError,
    handleIsCourseDigitalChange,
    isCourseDigitalError,
    courseCapacity,
    handleCourseCapacityChange,
    isCourseCapacityError,
    courseInClassInstructor,
    handleInClassInstructorChange,
    isCourseInClassInstructorError,
    handleAddNewCourseEntry,
    handleEditCourseEntry,
    inClassInstructors,
    CourseTypes,
  };
};

export default useNewCourseScreen;
