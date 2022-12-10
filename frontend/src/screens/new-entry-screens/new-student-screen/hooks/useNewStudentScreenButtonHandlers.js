import AlertVariants from "../../../../domain/constants/AlertVariants";
import { Results } from "../../../../domain/constants/Results";
import { addOneStudentUC, deleteOneStudentUC, editOneStudentUC } from "../../../../domain/db";
import {
  getFilledStudentApplicationFormPdfUC,
  getFilledStudentInCarEvaluationPdfUC,
  getFilledStudentInCarRecordPdfUC,
  getFilledStudentInvoicePdfUC,
  getFilledStudentRecordPdfUC,
  F,
} from "../../../../domain/pdf";

const useNewStudentScreenButtonHandlers = (studentState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewStudentEntry = async () => {
    // console.log(studentState.studentObject)

    studentState.uiModifiersObject.setIsLoading(true);
    if (
      !studentState.studentObject.isStudentFirstNameError &&
      !studentState.studentObject.isStudentMiddleNameError &&
      !studentState.studentObject.isStudentLastNameError &&
      !studentState.studentObject.isStudentDateOfBirthError &&
      !studentState.studentObject.isStudentGenderError &&
      !studentState.studentObject.isStudentAddressError &&
      !studentState.studentObject.isStudentAddressCityError &&
      !studentState.studentObject.isStudentAddressPostalCodeError &&
      !studentState.studentObject.isStudentCellPhoneNumberError &&
      !studentState.studentObject.isStudentHomePhoneNumberError &&
      !studentState.studentObject.isStudentDriversLicenseIdError &&
      !studentState.studentObject.isStudentDriversLicenseIssuedDateError &&
      !studentState.studentObject.isStudentDriversLicenseExpDateError &&
      !studentState.studentObject.isStudentRegisteredCourseIdError &&
      !studentState.studentObject.isStudentPurchasedProductIdError
    ) {
      const result = await addOneStudentUC(studentState.studentObject);

      if (result.data.status == Results.SUCCESS) {
        studentState.uiModifiersObject.setDataSaved(true);
      } else {
        studentState.messageObject.setMessage("ERROR - Failed to add student to database");
        studentState.messageObject.setMessageColor(AlertVariants.DANGER);
        studentState.messageObject.setShowMessage(true);
      }
    }
    studentState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditStudentEntry = async () => {
    if (
      !studentState.studentObject.isStudentFirstNameError &&
      !studentState.studentObject.isStudentMiddleNameError &&
      !studentState.studentObject.isStudentLastNameError &&
      !studentState.studentObject.isStudentDateOfBirthError &&
      !studentState.studentObject.isStudentGenderError &&
      !studentState.studentObject.isStudentAddressError &&
      !studentState.studentObject.isStudentAddressCityError &&
      !studentState.studentObject.isStudentAddressPostalCodeError &&
      !studentState.studentObject.isStudentCellPhoneNumberError &&
      !studentState.studentObject.isStudentHomePhoneNumberError &&
      !studentState.studentObject.isStudentDriversLicenseIdError &&
      !studentState.studentObject.isStudentDriversLicenseIssuedDateError &&
      !studentState.studentObject.isStudentDriversLicenseExpDateError &&
      !studentState.studentObject.isStudentRegisteredCourseIdError &&
      !studentState.studentObject.isStudentPurchasedProductIdError
    ) {
      const result = await editOneStudentUC(studentState.studentObject, studentState.primary_key);

      if (result.data.status == Results.SUCCESS) {
        studentState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        studentState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        studentState.messageObject.setShowMessage(true);
        studentState.uiModifiersObject.setAreFieldsEditable(false);
      } else {
        studentState.messageObject.setMessage("ERROR - Failed to update item in database");
        studentState.messageObject.setMessageColor(AlertVariants.DANGER);
        studentState.messageObject.setShowMessage(true);
        studentState.uiModifiersObject.setAreFieldsEditable(false);
      }
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleChangeToEditableForm = async () => {
    studentState.uiModifiersObject.setAreFieldsEditable(true);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDismissErrorAlert = async () => {
    studentState.messageObject.setShowMessage(false);
  };

  /**
   *
   */
  const handleGoBack = async () => {
    if (studentState.uiModifiersObject.isNewEntry) {
      await studentState.navigation("/?initial_selection=students");
    } else {
      studentState.uiModifiersObject.areFieldsEditable
        ? await studentState.uiModifiersObject.setAreFieldsEditable(false)
        : await studentState.navigation("/?initial_selection=students");
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteStudent = async () => {
    const result = await deleteOneStudentUC(studentState.primary_key);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentApplicationFormPdf = async () => {
    const result = await getFilledStudentApplicationFormPdfUC();
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentInCarEvaluationPdf = async () => {
    const result = await getFilledStudentInCarEvaluationPdfUC();
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentInCarRecordPdf = async () => {
    const result = await getFilledStudentInCarRecordPdfUC();
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentInvoicePdfUC = async () => {
    const result = await getFilledStudentInvoicePdfUC();
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentRecordPdf = async () => {
    const result = await getFilledStudentRecordPdfUC();
  };

  const studentButtonHandlers = {
    handleAddNewStudentEntry,
    handleEditStudentEntry,
    handleChangeToEditableForm,
    handleDismissErrorAlert,
    handleDeleteStudent,
    handleGetFilledStudentApplicationFormPdf,
    handleGetFilledStudentInCarEvaluationPdf,
    handleGetFilledStudentInCarRecordPdf,
    handleGetFilledStudentInvoicePdfUC,
    handleGetFilledStudentRecordPdf,
    handleGoBack,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { studentButtonHandlers };
};

export default useNewStudentScreenButtonHandlers;
