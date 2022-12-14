import AlertVariants from "../../../../domain/constants/AlertVariants";
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
    try {
      const result = await getAllInClassInstructorsUC();
      courseState.dropdownMenuOptionsObject.setInClassInstructors(result.data);
    } catch (e) {
      courseState.dropdownMenuOptionsObject.setInClassInstructors([]);
      courseState.dropdownMenuOptionsObject.setFailedToGetInClassInstructors(true);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificCourse = async () => {
    try {
      const result = await getOneCourseUC(courseState.primary_key);

      courseState.courseObject.setCourseId(result.data[0][courseTableHeadings.courseId]);
      courseState.courseObject.setIsCourseIdError(false);

      courseState.courseObject.setCourseCapacity(result.data[0][courseTableHeadings.capacity]);
      courseState.courseObject.setIsCourseCapacityError(false);

      courseState.courseObject.setCourseStartDate(result.data[0][courseTableHeadings.startDate]);
      courseState.courseObject.setIsCourseStartDateError(false);

      courseState.courseObject.setCourseEndDate(result.data[0][courseTableHeadings.endDate]);
      courseState.courseObject.setIsCourseEndDateError(false);

      courseState.courseObject.setCourseIsDigital(result.data[0][courseTableHeadings.isDigital]);
      courseState.courseObject.setIsCourseIsDigitalError(false);

      courseState.courseObject.setCourseInClassInstructor(result.data[0][courseTableHeadings.inClassInstructorId]);
      courseState.courseObject.setIsCourseInClassInstructorError(false);

      courseState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      courseState.uiModifiersObject.setFailedToGetData(true);
      courseState.messageObject.setMessage("ERROR - Failed to get item");
      courseState.messageObject.setMessageColor(AlertVariants.DANGER);
      courseState.messageObject.setShowMessage(true);
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
