import AlertVariants from "../../../../domain/constants/AlertVariants";
import { Results } from "../../../../domain/constants/Results";
import { addOneCourseUC, deleteOneCourseUC, editOneCourseUC } from "../../../../domain/db";
import { getFilledCourseEnrollmentPdfUC } from "../../../../domain/pdf";

const useNewCourseScreenButtonHandlers = (courseState) => {
  /**
   *
   */
  const handleAddNewCourseEntry = async () => {
    // console.log(courseState.courseObject)
    courseState.uiModifiersObject.setIsLoading(true);

    if (
      !courseState.courseObject.isCourseIdError &&
      !courseState.courseObject.isCourseCapacityError &&
      !courseState.courseObject.isCourseStartDateError &&
      !courseState.courseObject.isCourseEndDateError &&
      !courseState.courseObject.isCourseIsDigitalError &&
      !courseState.courseObject.isCourseInClassInstructorError
    ) {
      try {
        await addOneCourseUC(courseState.courseObject);
        courseState.uiModifiersObject.setDataSaved(true);
      } catch (e) {
        courseState.messageObject.setMessage("ERROR - Failed to add course to database");
        courseState.messageObject.setMessageColor(AlertVariants.DANGER);
        courseState.messageObject.setShowMessage(true);
      }
    }
    courseState.uiModifiersObject.setIsLoading(false);
  };

  /**
   *
   */
  const handleEditCourseEntry = async () => {
    courseState.uiModifiersObject.setIsLoading(true);

    if (
      !courseState.courseObject.isCourseIdError &&
      !courseState.courseObject.isCourseCapacityError &&
      !courseState.courseObject.isCourseStartDateError &&
      !courseState.courseObject.isCourseEndDateError &&
      !courseState.courseObject.isCourseIsDigitalError &&
      !courseState.courseObject.isCourseInClassInstructorError
    ) {
      try {
        await editOneCourseUC(courseState.courseObject, courseState.primary_key);
        courseState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        courseState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        courseState.messageObject.setShowMessage(true);
      } catch (e) {
        courseState.messageObject.setMessage("ERROR - Failed to update item in database");
        courseState.messageObject.setMessageColor(AlertVariants.DANGER);
        courseState.messageObject.setShowMessage(true);
      }
    }

    courseState.uiModifiersObject.setAreFieldsEditable(false);
    courseState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleChangeToEditableForm = async () => {
    courseState.uiModifiersObject.setAreFieldsEditable(true);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDismissErrorAlert = async () => {
    courseState.messageObject.setShowMessage(false);
  };

  /**
   *
   */
  const handleGoBack = async () => {
    if (courseState.uiModifiersObject.isNewEntry) {
      await courseState.navigation("/?initial_selection=courses");
    } else {
      courseState.uiModifiersObject.areFieldsEditable
        ? await courseState.uiModifiersObject.setAreFieldsEditable(false)
        : await courseState.navigation("/?initial_selection=courses");
    }
  };

  /**
   *
   */
  const handleDeleteCourse = async () => {
    courseState.uiModifiersObject.setIsLoading(true);

    try {
      await deleteOneCourseUC(courseState.primary_key);
      await handleGoBack();
    } catch (e) {
      courseState.messageObject.setMessage("ERROR - Failed to delete item");
      courseState.messageObject.setMessageColor(AlertVariants.DANGER);
      courseState.messageObject.setShowMessage(true);
    }

    courseState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledCoursePdf = async () => {
    courseState.uiModifiersObject.setIsLoading(true);
    try {
      await getFilledCourseEnrollmentPdfUC(courseState.primary_key);
      courseState.messageObject.setMessage("SUCCESS - PDF file should be opened as 'course_enrollment_output_{number}.pdf'");
      courseState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      courseState.messageObject.setShowMessage(true);
    } catch (e) {
      courseState.messageObject.setMessage("ERROR - please close all instances of 'course_enrollment_output_{number}.pdf'");
      courseState.messageObject.setMessageColor(AlertVariants.DANGER);
      courseState.messageObject.setShowMessage(true);
    }
    courseState.uiModifiersObject.setIsLoading(false);
  };

  const courseButtonHandlers = {
    handleAddNewCourseEntry,
    handleEditCourseEntry,
    handleChangeToEditableForm,
    handleDismissErrorAlert,
    handleDeleteCourse,
    handleGetFilledCoursePdf,
    handleGoBack,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { courseButtonHandlers };
};

export default useNewCourseScreenButtonHandlers;
