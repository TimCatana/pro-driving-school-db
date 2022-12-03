import {
  addOneCourseUC,
  deleteOneCourseUC,
  editOneCourseUC,
} from "../../../../domain/db";
import { getCoursePdf } from "../../../../domain/pdf";

const useNewCourseScreenButtonHandlers = (courseState) => {
  /**
   *
   */
  const handleAddNewCourseEntry = async () => {
    // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${courseState.isLoading}
    // cid ${courseState.courseObject.courseId}
    // ${typeof courseState.courseObject.courseId}
    // ${courseState.courseObject.isCourseIdError}
    // cc ${courseState.courseObject.courseCapacity}
    // ${typeof courseState.courseObject.courseCapacity}
    // ${courseState.courseObject.isCourseCapacityError}
    // csd ${courseState.courseObject.courseStartDate}
    // ${typeof courseState.courseObject.courseStartDate}
    // ${courseState.courseObject.isCourseStartDateError}
    // ced ${courseState.courseObject.courseEndDate}
    // ${typeof courseState.courseObject.courseEndDate}
    // ${courseState.courseObject.isCourseEndDateError}
    // cd ${courseState.courseObject.isCourseDigital}
    // ${typeof courseState.courseObject.isCourseDigital}
    // ${courseState.courseObject.isCourseDigitalError}
    // cici ${courseState.courseObject.courseInClassInstructor}
    // ${typeof courseState.courseObject.courseInClassInstructor}
    // ${courseState.courseObject.isCourseInClassInstructorError}`);

    courseState.setIsLoading(true);
    if (
      !courseState.courseObject.isCourseIdError &&
      !courseState.courseObject.isCourseCapacityError &&
      !courseState.courseObject.isCourseStartDateError &&
      !courseState.courseObject.isCourseEndDateError &&
      !courseState.courseObject.isCourseIsDigitalError &&
      !courseState.courseObject.isCourseInClassInstructorError
    ) {
      await addOneCourseUC(courseState.courseObject);
    }
    courseState.setIsLoading(false);
    courseState.setCourseSaved(true);
  };

  /**
   *
   */
  const handleEditCourseEntry = async () => {
    courseState.setIsLoading(true);
    if (
      !courseState.courseObject.isCourseIdError &&
      !courseState.courseObject.isCourseCapacityError &&
      !courseState.courseObject.isCourseStartDateError &&
      !courseState.courseObject.isCourseEndDateError &&
      !courseState.courseObject.isCourseIsDigitalError &&
      !courseState.courseObject.isCourseInClassInstructorError
    ) {
      await editOneCourseUC(courseState.courseObject, courseState.primary_key);
    }
    courseState.setIsLoading(false);
  };

  /**
   *
   */
  const handleDeleteCourse = async () => {
    courseState.setIsLoading(true);
    await deleteOneCourseUC(courseState.primary_key);
    courseState.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledCoursePdf = async () => {
    const result = await getCoursePdf(1);
  };

  const courseButtonHandlers = {
    handleAddNewCourseEntry,
    handleEditCourseEntry,
    handleDeleteCourse,
    handleGetFilledCoursePdf,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { courseButtonHandlers };
};

export default useNewCourseScreenButtonHandlers;
