import { useEffect } from "react";
import {
  isDateFormatYYYYMMDD,
  isNumber,
  isEndDateFuture,
  isValidDate,
} from "../../../domain/validators";
import {
  useNewCourseScreenUseEffectHelpers,
  useNewCourseScreenChangeHandlers,
  useNewCourseScreenButtonHandlers,
  useNewCourseScreenStates,
} from "./components";

const useNewCourseScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const { courseState } = useNewCourseScreenStates();

  const { courseChangeHandlers } =
    useNewCourseScreenChangeHandlers(courseState);
  const { courseButtonHandlers } =
    useNewCourseScreenButtonHandlers(courseState);
  const { courseUseEffectHelpers } =
    useNewCourseScreenUseEffectHelpers(courseState);

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
    if (courseState.courseSaved && !courseState.isLoading) {
      courseState.navigation("/home");
    }
  }, [courseState.courseSaved]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    if (isNumber(courseState.courseObject.courseId)) {
      parseInt(courseState.courseObject.courseId) > -1
        ? courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseIdError: false,
          })
        : courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseIdError: true,
          });
    } else {
      courseState.setCourseObject({
        ...courseState.courseObject,
        isCourseIdError: true,
      });
    }
  }, [courseState.courseObject.courseId]);

  /**
   * Validates newly inputted courseCapacity
   * @dependent courseId
   */
  useEffect(() => {
    if (isNumber(courseState.courseObject.courseCapacity)) {
      parseInt(courseState.courseObject.courseCapacity) > -1
        ? courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseCapacityError: false,
          })
        : courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseCapacityError: true,
          });
    } else {
      courseState.setCourseObject({
        ...courseState.courseObject,
        isCourseCapacityError: true,
      });
    }
  }, [courseState.courseObject.courseCapacity]);

  /**
   * Validates newly selected start date
   * @dependent courseStartDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(courseState.courseObject.courseStartDate)) {
      isEndDateFuture(
        courseState.courseObject.courseStartDate,
        courseState.courseObject.courseEndDate
      ) // date validation is done within function therefore is end date isn't selected then should return false
        ? courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseStartDateError: false,
            isCourseEndDateError: false,
          })
        : courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseStartDateError: false,
            isCourseEndDateError: true,
          });
    } else {
      courseState.setCourseObject({
        ...courseState.courseObject,
        isCourseStartDateError: true,
      });
    }
  }, [courseState.courseObject.courseStartDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(courseState.courseObject.courseEndDate)) {
      if (isValidDate(courseState.courseObject.courseStartDate)) {
        isEndDateFuture(
          courseState.courseObject.courseStartDate,
          courseState.courseObject.courseEndDate
        )
          ? courseState.setCourseObject({
              ...courseState.courseObject,
              isCourseEndDateError: false,
            })
          : courseState.setCourseObject({
              ...courseState.courseObject,
              isCourseEndDateError: true,
            });
      } else {
        courseState.setCourseObject({
          ...courseState.courseObject,
          isCourseEndDateError: false,
        });
      }
    } else {
      courseState.setCourseObject({
        ...courseState.courseObject,
        isCourseEndDateError: true,
      });
    }
  }, [courseState.courseObject.courseEndDate]);

  /**
   * Validates newly selected is class digital or in person option
   * @dependent isDigital
   */
  useEffect(() => {
    courseState.courseObject.courseIsDigital ==
      courseState.CourseTypes.DIGITAL ||
    courseState.courseObject.courseIsDigital ==
      courseState.CourseTypes.IN_PERSON
      ? courseState.setCourseObject({
          ...courseState.courseObject,
          isCourseIsDigitalError: false,
        })
      : courseState.setCourseObject({
          ...courseState.courseObject,
          isCourseIsDigitalError: true,
        });
  }, [courseState.courseObject.courseIsDigital]);

  /**
   * Validates newly selected in class instructor
   * @dependent inClassInstructor
   */
  useEffect(() => {
    if (isNumber(courseState.courseObject.courseInClassInstructor)) {
      courseState.inClassInstructors.some(
        (element) =>
          element.id == courseState.courseObject.courseInClassInstructor
      )
        ? courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseInClassInstructorError: false,
          })
        : courseState.setCourseObject({
            ...courseState.courseObject,
            isCourseInClassInstructorError: true,
          });
    } else {
      courseState.setCourseObject({
        ...courseState.courseObject,
        isCourseInClassInstructorError: true,
      });
    }
  }, [courseState.courseObject.courseInClassInstructor]);

  /**
   * Validates newly selected in class instructor
   * @dependent inClassInstructor
   */
  useEffect(() => {
    console.log(courseState.courseObject);
  }, [courseState.courseObject]);

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

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
