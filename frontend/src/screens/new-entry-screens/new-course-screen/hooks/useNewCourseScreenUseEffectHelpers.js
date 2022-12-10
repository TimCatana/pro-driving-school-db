import axios from "axios";
import { courseTableHeadings } from "../../../../domain/constants/dbConstants";
import { getOneCourseUC } from "../../../../domain/db";
import getAllInClassInstructorsUC from "../../../../domain/db/getAll/getAllInClassInstructorsUC";

const useNewCourseScreenUseEffectHelpers = (courseState) => {
  /**
   *
   */
  const onRender = async () => {
    courseState.uiModifiersObject.setIsLoading(true);
    await handleGetInClassInstructors();

    if (courseState.primary_key != 0) {
      await handleGetSpecificCourse();
      courseState.uiModifiersObject.setIsNewEntry(false);
      courseState.uiModifiersObject.setAreFieldsEditable(false);
    } else {
      courseState.uiModifiersObject.setIsNewEntry(true);
      courseState.uiModifiersObject.setAreFieldsEditable(true);
    }

    courseState.uiModifiersObject.setIsLoading(false);
    courseState.initialRender.current = false;
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    const result = await getAllInClassInstructorsUC();

    if (result.data.status == 200) {
      courseState.dropdownMenuOptionsObject.setInClassInstructors(result.data.query);
    } else {
      courseState.dropdownMenuOptionsObject.setInClassInstructors([]);
      courseState.dropdownMenuOptionsObject.setFailedToGetInClassInstructors(true);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificCourse = async () => {
    const result = await getOneCourseUC(courseState.primary_key);

    if (result.data.status == 200) {
      courseState.courseObject.setCourseId(result.data.query[0][courseTableHeadings.courseId]);
      courseState.courseObject.setIsCourseIdError(false);

      courseState.courseObject.setCourseCapacity(result.data.query[0][courseTableHeadings.capacity]);
      courseState.courseObject.setIsCourseCapacityError(false);

      courseState.courseObject.setCourseStartDate(result.data.query[0][courseTableHeadings.startDate]);
      courseState.courseObject.setIsCourseStartDateError(false);

      courseState.courseObject.setCourseEndDate(result.data.query[0][courseTableHeadings.endDate]);
      courseState.courseObject.setIsCourseEndDateError(false);

      courseState.courseObject.setCourseIsDigital(result.data.query[0][courseTableHeadings.isDigital]);
      courseState.courseObject.setIsCourseIsDigitalError(false);

      courseState.courseObject.setCourseInClassInstructor(
        result.data.query[0][courseTableHeadings.inClassInstructorId]
      );
      courseState.courseObject.setIsCourseInClassInstructorError(false);

      courseState.uiModifiersObject.setFailedToGetData(false);
    } else {
      courseState.uiModifiersObject.setFailedToGetData(true);
    }
  };

  /**
   *
   */
  const navigateAfterSave = async () => {
    courseState.navigation("/?initial_selection=courses");
  };

  /**
   *
   */
  const courseUseEffectHelpers = {
    onRender,
    handleGetSpecificCourse,
    navigateAfterSave,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    courseUseEffectHelpers,
  };
};

export default useNewCourseScreenUseEffectHelpers;
