import AlertVariants from "../../../../domain/constants/AlertVariants";
import { Results } from "../../../../domain/constants/Results";
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
      const result = await addOneInCarInstructorUC(inCarInstructorState.inCarInstructorObject);

      if (result.data.status == Results.SUCCESS) {
        inCarInstructorState.uiModifiersObject.setDataSaved(true);
      } else {
        inCarInstructorState.messageObject.setMessage("ERROR - Failed to add in car instructor to database");
        inCarInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
        inCarInstructorState.messageObject.setShowMessage(true);
      }
    }

    inCarInstructorState.uiModifiersObject.setIsLoading(true);
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
      const result = await editOneInCarInstructorUC(
        inCarInstructorState.inCarInstructorObject,
        inCarInstructorState.primary_key
      );

      if (result.data.status == Results.SUCCESS) {
        inCarInstructorState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        inCarInstructorState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        inCarInstructorState.messageObject.setShowMessage(true);
        inCarInstructorState.uiModifiersObject.setAreFieldsEditable(false);
      } else {
        inCarInstructorState.messageObject.setMessage("ERROR - Failed to update item in database");
        inCarInstructorState.messageObject.setMessageColor(AlertVariants.DANGER);
        inCarInstructorState.messageObject.setShowMessage(true);
        inCarInstructorState.uiModifiersObject.setAreFieldsEditable(false);
      }
    }

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
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInstructor = async () => {
    const result = await deleteOneInCarInstructorUC(inCarInstructorState.primary_key);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  const inCarInstructorButtonHandlers = {
    handleAddNewInCarInstructor,
    handleEditInCarInstructor,
    handleChangeToEditableForm,
    handleDismissErrorAlert,
    handleDeleteInCarInstructor,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { inCarInstructorButtonHandlers };
};

export default useNewInCarInstructorScreenButtonHandlers;
