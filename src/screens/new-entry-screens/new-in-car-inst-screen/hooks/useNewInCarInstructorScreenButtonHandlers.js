import AlertVariants from "../../../../domain/constants/AlertVariants";
import { addOneInCarInstructorUC, deleteOneInCarInstructorUC, editOneInCarInstructorUC } from "../../../../domain/db";

const useNewInCarInstructorScreenButtonHandlers = (inCarInstructorState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewInCarInstructor = async () => {
    // console.log(inCarInstructorState.inCarInstructorObject)
    inCarInstructorState.uiModifiersObject.setIsLoading(true);

    if (
      !inCarInstructorState.inCarInstructorObject.isFirstNameError &&
      !inCarInstructorState.inCarInstructorObject.isLastNameError &&
      !inCarInstructorState.inCarInstructorObject.isInstDriversLicenseIdError &&
      !inCarInstructorState.inCarInstructorObject.isInstDriversLicenseExpDateError &&
      !inCarInstructorState.inCarInstructorObject.isGDriversLicenseIdError &&
      !inCarInstructorState.inCarInstructorObject.isGDriversLicenseExpDateError
    ) {
      try {
        await addOneInCarInstructorUC(inCarInstructorState.inCarInstructorObject);
        inCarInstructorState.uiModifiersObject.setDataSaved(true);
      } catch (e) {
        inCarInstructorState.messageObject.setMessage("ERROR - Failed to add in car instructor to database");
        inCarInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
        inCarInstructorState.messageObject.setShowMessage(true);
      }
    }

    inCarInstructorState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditInCarInstructor = async () => {
    inCarInstructorState.uiModifiersObject.setIsLoading(true);

    if (
      !inCarInstructorState.inCarInstructorObject.isFirstNameError &&
      !inCarInstructorState.inCarInstructorObject.isLastNameError &&
      !inCarInstructorState.inCarInstructorObject.isInstDriversLicenseIdError &&
      !inCarInstructorState.inCarInstructorObject.isInstDriversLicenseExpDateError &&
      !inCarInstructorState.inCarInstructorObject.isGDriversLicenseIdError &&
      !inCarInstructorState.inCarInstructorObject.isGDriversLicenseExpDateError
    ) {
      try {
        await editOneInCarInstructorUC(inCarInstructorState.inCarInstructorObject, inCarInstructorState.primary_key);
        inCarInstructorState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        inCarInstructorState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        inCarInstructorState.messageObject.setShowMessage(true);
      } catch (e) {
        inCarInstructorState.messageObject.setMessage("ERROR - Failed to update item in database");
        inCarInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
        inCarInstructorState.messageObject.setShowMessage(true);
      }
    }

    inCarInstructorState.uiModifiersObject.setAreFieldsEditable(false);
    inCarInstructorState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleChangeToEditableForm = async () => {
    inCarInstructorState.uiModifiersObject.setAreFieldsEditable(true);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDismissErrorAlert = async () => {
    inCarInstructorState.messageObject.setShowMessage(false);
  };

  /**
   *
   */
  const handleGoBack = async () => {
    if (inCarInstructorState.uiModifiersObject.isNewEntry) {
      await inCarInstructorState.navigation("/?initial_selection=in-car-instructors");
    } else {
      inCarInstructorState.uiModifiersObject.areFieldsEditable
        ? await inCarInstructorState.uiModifiersObject.setAreFieldsEditable(false)
        : await inCarInstructorState.navigation("/?initial_selection=in-car-instructors");
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInstructor = async () => {
    inCarInstructorState.uiModifiersObject.setIsLoading(true);

    try {
      await deleteOneInCarInstructorUC(inCarInstructorState.primary_key);
      await handleGoBack();
    } catch (e) {
      inCarInstructorState.messageObject.setMessage("ERROR - Failed to delete item");
      inCarInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
      inCarInstructorState.messageObject.setShowMessage(true);
    }

    inCarInstructorState.uiModifiersObject.setIsLoading(false);
  };

  const inCarInstructorButtonHandlers = {
    handleAddNewInCarInstructor,
    handleEditInCarInstructor,
    handleChangeToEditableForm,
    handleDismissErrorAlert,
    handleDeleteInCarInstructor,
    handleGoBack,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { inCarInstructorButtonHandlers };
};

export default useNewInCarInstructorScreenButtonHandlers;
