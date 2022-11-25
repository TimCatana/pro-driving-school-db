import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import isDateValid from "../../../components/helpers/validators/isDateValid";
import axios from "axios";

const useNewCourseScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const CourseTypes = {
    DIGITAL: "0",
    IN_PERSON: "1",
  };

  const navigation = useNavigate();
  const { primary_key } = useParams();
  const [inClassInstructors, _setInClassInstructors] = useState(false);

  const [isLoading, _setIsLoading] = useState(true);

  const [courseId, _setCourseId] = useState("");
  const [isCourseIdError, _setIsCourseIdError] = useState(true);

  const [courseStartDate, _setCourseStartDate] = useState("");
  const [isCourseStartDateError, _setIsCourseStartDateError] = useState(true);

  const [courseEndDate, _setCourseEndDate] = useState("");
  const [isCourseEndDateError, _setIsCourseEndDateError] = useState(true);

  const [_isCourseDigital, _setIsCourseDigital] = useState(CourseTypes.DIGITAL);
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
    courseId.length > 0
      ? _setIsCourseIdError(false)
      : _setIsCourseIdError(true);
    // TODO - make sure its a valid number? HTML should take care of that. though I will validate again in the backend.
  }, [courseId]);

  /**
   * Validates newly selected start date
   * @dependent courseStartDate
   */
  useEffect(() => {
    courseStartDate != null
      ? _setIsCourseStartDateError(false)
      : _setIsCourseStartDateError(true);
    _setIsCourseStartDateError(!isDateValid(courseStartDate));
  }, [courseStartDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    courseEndDate != null
      ? _setIsCourseEndDateError(false)
      : _setIsCourseEndDateError(true);
    _setIsCourseEndDateError(!isDateValid(courseEndDate));
  }, [courseEndDate]);

  /**
   * Validates newly selected is class digital or in person option
   * @dependent isDigital
   */
  useEffect(() => {
    _isCourseDigital === true || _isCourseDigital === false
      ? _setIsCourseDigitalError(false)
      : _setIsCourseDigitalError(true);
  }, [_isCourseDigital]);

  /**
   * Validates newly inputted courseCapacity
   * @dependent courseId
   */
  useEffect(() => {
    courseCapacity.length > 0
      ? _setIsCourseCapacityError(false)
      : _setIsCourseCapacityError(true);
    // TODO - make sure its a valid number? HTML should take care of that. though I will validate again in the backend.
  }, [courseCapacity]);

  /**
   * Validates newly selected in class instructor
   * @dependent inClassInstructor
   */
  useEffect(() => {
    courseInClassInstructor.length > 0
      ? _setIsCourseInClassInstructorError(false)
      : _setIsCourseInClassInstructorError(true);

    console.log(`lol ${courseInClassInstructor}`)
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

      if (primary_key == 0) {
        _setCourseInClassInstructor(result.data.query[0].id);
      }

      console.log(result.data.query);
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
  const handleInClassInstructorChange = (value) => {
    _setCourseInClassInstructor(value);
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
    // csd ${courseStartDate}
    // ${typeof courseStartDate}
    // ${isCourseStartDateError}
    // ced ${courseEndDate}
    // ${typeof courseEndDate}
    // ${isCourseEndDateError}
    // cd ${_isCourseDigital}
    // ${typeof _isCourseDigital}
    // ${isCourseDigitalError}
    // cc ${courseCapacity}
    // ${typeof courseCapacity}
    // ${isCourseCapacityError}
    // ${courseInClassInstructor}
    // ${isCourseInClassInstructorError}
    // `);

    console.log(courseId);
    console.log(courseStartDate);
    console.log(courseEndDate);
    console.log(_isCourseDigital);
    console.log(courseCapacity);
    console.log(courseInClassInstructor);

    axios.post(`http://localhost:4400/course/add`, {
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
  };
};

export default useNewCourseScreen;
