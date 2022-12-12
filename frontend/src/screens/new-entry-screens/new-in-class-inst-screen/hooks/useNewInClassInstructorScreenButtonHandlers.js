import AlertVariants from "../../../../domain/constants/AlertVariants";
import {
  addOneInClassInstructorUC,
  deleteOneInClassInstructorUC,
  editOneInClassInstructorUC,
} from "../../../../domain/db";

const useNewInClassInstructorScreenButtonHandlers = (inClassInstructorState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewInClassInstructor = async () => {
    // console.log(inClassInstructorState.inClassInstructorObject)

    inClassInstructorState.uiModifiersObject.setIsLoading(true);
    if (
      !inClassInstructorState.inClassInstructorObject.isFirstNameError &&
      !inClassInstructorState.inClassInstructorObject.isLastNameError &&
      !inClassInstructorState.inClassInstructorObject.isDriversLicenseIdError &&
      !inClassInstructorState.inClassInstructorObject.isDriversLicenseExpDateError
    ) {
      try {
        await addOneInClassInstructorUC(inClassInstructorState.inClassInstructorObject);
        inClassInstructorState.uiModifiersObject.setDataSaved(true);
      } catch (e) {
        inClassInstructorState.messageObject.setMessage("ERROR - Failed to add in class instructor to database");
        inClassInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
        inClassInstructorState.messageObject.setShowMessage(true);
      }
    }

    inClassInstructorState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditInClassInstEntry = async () => {
    inClassInstructorState.uiModifiersObject.setIsLoading(true);

    if (
      !inClassInstructorState.inClassInstructorObject.isFirstNameError &&
      !inClassInstructorState.inClassInstructorObject.isLastNameError &&
      !inClassInstructorState.inClassInstructorObject.isDriversLicenseIdError &&
      !inClassInstructorState.inClassInstructorObject.isDriversLicenseExpDateError
    ) {
      try {
        await editOneInClassInstructorUC(
          inClassInstructorState.inClassInstructorObject,
          inClassInstructorState.primary_key
        );
        inClassInstructorState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        inClassInstructorState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        inClassInstructorState.messageObject.setShowMessage(true);
      } catch (e) {
        inClassInstructorState.messageObject.setMessage("ERROR - Failed to update item in database");
        inClassInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
        inClassInstructorState.messageObject.setShowMessage(true);
      }
    }

    inClassInstructorState.uiModifiersObject.setAreFieldsEditable(false);
    inClassInstructorState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleChangeToEditableForm = async () => {
    inClassInstructorState.uiModifiersObject.setAreFieldsEditable(true);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDismissErrorAlert = async () => {
    inClassInstructorState.messageObject.setShowMessage(false);
  };

  /**
   *
   */
  const handleGoBack = async () => {
    if (inClassInstructorState.uiModifiersObject.isNewEntry) {
      await inClassInstructorState.navigation("/?initial_selection=in-class-instructors");
    } else {
      inClassInstructorState.uiModifiersObject.areFieldsEditable
        ? await inClassInstructorState.uiModifiersObject.setAreFieldsEditable(false)
        : await inClassInstructorState.navigation("/?initial_selection=in-class-instructors");
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInClassInst = async () => {
    inClassInstructorState.uiModifiersObject.setIsLoading(true);

    try {
      await deleteOneInClassInstructorUC();
      await handleGoBack();
    } catch (e) {
      inClassInstructorState.messageObject.setMessage("ERROR - Failed to delete item");
      inClassInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
      inClassInstructorState.messageObject.setShowMessage(true);
    }

    inClassInstructorState.uiModifiersObject.setIsLoading(false);
  };

  const inClassInstructorButtonHandlers = {
    handleAddNewInClassInstructor,
    handleEditInClassInstEntry,
    handleChangeToEditableForm,
    handleDismissErrorAlert,
    handleDeleteInClassInst,
    handleGoBack,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { inClassInstructorButtonHandlers };
};

export default useNewInClassInstructorScreenButtonHandlers;
