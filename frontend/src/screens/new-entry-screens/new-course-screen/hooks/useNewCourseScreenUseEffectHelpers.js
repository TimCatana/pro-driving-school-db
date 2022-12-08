import axios from "axios";
import { courseTableHeadings } from "../../../../domain/constants/dbConstants";
import { getOneCourseUC } from "../../../../domain/db";
import getAllInClassInstructorsUC from "../../../../domain/db/getAll/getAllInClassInstructorsUC";

const useNewCourseScreenUseEffectHelpers = (courseState) => {
  /**
   *
   */
  const onRender = async () => {
    courseState.setIsLoading(true);
    await handleGetInClassInstructors();
    // if no instructors, need to show message saying that instructors need to be added

    if (courseState.primary_key != 0) {
      await handleGetSpecificCourse();
      courseState.setIsNewEntry(false);
    }

    courseState.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    const result = await getAllInClassInstructorsUC();

    if (result.data.status == 200) {
      courseState.setInClassInstructors(result.data.query);
    } else {
      console.log(result.data);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificCourse = async () => {
    const result = await getOneCourseUC(courseState.primary_key);

    if (result.data.status == 200) {
      courseState.setCourseObject({
        ...courseState.courseObject,
        courseId: result.data.query[0][courseTableHeadings.courseId],
        isCourseIdError: false,
        courseCapacity: result.data.query[0][courseTableHeadings.capacity],
        isCourseCapacityError: false,
        courseStartDate: result.data.query[0][courseTableHeadings.startDate],
        isCourseStartDateError: false,
        courseEndDate: result.data.query[0][courseTableHeadings.endDate],
        isCourseEndDateError: false,
        courseIsDigital: result.data.query[0][courseTableHeadings.isDigital],
        isCourseIsDigitalError: false,
        courseInClassInstructor:
          result.data.query[0][courseTableHeadings.inClassInstructorId],
        isCourseInClassInstructorError: false,
      });

      courseState.setSelectedCourseType(
        result.data.query[0][courseTableHeadings.isDigital]
      );
      courseState.setSelectedInstructor(
        result.data.query[0][courseTableHeadings.inClassInstructorId]
      );

      console.log(result.data.query[0]);
    } else {
      console.log(result.data);
    }
  };

  /**
   *
   */
  const courseUseEffectHelpers = {
    onRender,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    courseUseEffectHelpers,
  };
};

export default useNewCourseScreenUseEffectHelpers;
