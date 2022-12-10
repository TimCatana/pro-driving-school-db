import { useEffect } from "react";
import { isDateFormatYYYYMMDD, isNumber, isEndDateFuture, isValidDate } from "../../../../domain/validators";
import {
  useNewCourseScreenUseEffectHelpers,
  useNewCourseScreenChangeHandlers,
  useNewCourseScreenButtonHandlers,
  useNewCourseScreenStates,
} from ".";
import { inClassInstTableHeadings } from "../../../../domain/constants/dbConstants";

const useNewCourseScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const { courseState } = useNewCourseScreenStates();

  const { courseChangeHandlers } = useNewCourseScreenChangeHandlers(courseState);
  const { courseButtonHandlers } = useNewCourseScreenButtonHandlers(courseState);
  const { courseUseEffectHelpers } = useNewCourseScreenUseEffectHelpers(courseState);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    courseUseEffectHelpers.onRender();
  }, []);

  /**
   *
   */
  useEffect(() => {
    if (courseState.uiModifiersObject.dataSaved) {
      courseUseEffectHelpers.navigateAfterSave();
    }
  }, [courseState.uiModifiersObject.dataSaved]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    if (isNumber(courseState.courseObject.courseId)) {
      parseInt(courseState.courseObject.courseId) > -1
        ? courseState.courseObject.setIsCourseIdError(false)
        : courseState.courseObject.setIsCourseIdError(true);
    } else {
      courseState.courseObject.setIsCourseIdError(true);
    }
  }, [courseState.courseObject.courseId]);

  /**
   * Validates newly inputted courseCapacity
   * @dependent courseId
   */
  useEffect(() => {
    if (isNumber(courseState.courseObject.courseCapacity)) {
      parseInt(courseState.courseObject.courseCapacity) > -1
        ? courseState.courseObject.setIsCourseCapacityError(false)
        : courseState.courseObject.setIsCourseCapacityError(true);
    } else {
      courseState.courseObject.setIsCourseCapacityError(true);
    }
  }, [courseState.courseObject.courseCapacity]);

  /**
   * Validates newly selected start date
   * @dependent courseStartDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(courseState.courseObject.courseStartDate)) {
      // date validation is done within function therefore is end date isn't selected then should return false
      if (isEndDateFuture(courseState.courseObject.courseStartDate, courseState.courseObject.courseEndDate)) {
        courseState.courseObject.setIsCourseStartDateError(false);
        courseState.courseObject.setIsCourseEndDateError(false);
      } else {
        courseState.courseObject.setIsCourseStartDateError(false);
        courseState.courseObject.setIsCourseEndDateError(true);
      }
    } else {
      courseState.courseObject.setIsCourseStartDateError(true);
    }
  }, [courseState.courseObject.courseStartDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(courseState.courseObject.courseEndDate)) {
      if (isValidDate(courseState.courseObject.courseStartDate)) {
        isEndDateFuture(courseState.courseObject.courseStartDate, courseState.courseObject.courseEndDate)
          ? courseState.courseObject.setIsCourseEndDateError(false)
          : courseState.courseObject.setIsCourseEndDateError(true);
      } else {
        courseState.courseObject.setIsCourseEndDateError(false);
      }
    } else {
      courseState.courseObject.setIsCourseEndDateError(true);
    }
  }, [courseState.courseObject.courseEndDate]);

  /**
   * Validates newly selected is class digital or in person option
   * @dependent isDigital
   */
  useEffect(() => {
    courseState.courseObject.courseIsDigital == courseState.CourseTypes.DIGITAL ||
    courseState.courseObject.courseIsDigital == courseState.CourseTypes.IN_PERSON
      ? courseState.courseObject.setIsCourseIsDigitalError(false)
      : courseState.courseObject.setIsCourseIsDigitalError(true);
  }, [courseState.courseObject.courseIsDigital]);

  /**
   * Validates newly selected in class instructor
   * @dependent inClassInstructor
   */
  useEffect(() => {
    if (courseState.courseObject.courseInClassInstructor.length > 0) {
      courseState.dropdownMenuOptionsObject.inClassInstructors.some(
        (element) =>
          element[inClassInstTableHeadings.driversLicenseId] == courseState.courseObject.courseInClassInstructor
      )
        ? courseState.courseObject.setIsCourseInClassInstructorError(false)
        : courseState.courseObject.setIsCourseInClassInstructorError(true);
    } else {
      courseState.courseObject.setIsCourseInClassInstructorError(true);
    }
  }, [courseState.courseObject.courseInClassInstructor]);

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    courseState,
    courseChangeHandlers,
    courseButtonHandlers,
  };
};

export default useNewCourseScreen;
