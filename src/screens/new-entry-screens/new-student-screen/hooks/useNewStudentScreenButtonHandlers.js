import AlertVariants from "../../../../domain/constants/AlertVariants";
import { Results } from "../../../../domain/constants/Results";
import { addOneStudentUC, deleteOneStudentUC, editOneStudentUC } from "../../../../domain/db";
import {
  getFilledStudentApplicationFormPdfUC,
  getFilledStudentInCarEvaluationPdfUC,
  getFilledStudentInCarRecordPdfUC,
  getFilledStudentInvoicePdfUC,
  getFilledStudentRecordPdfUC,
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
      !studentState.studentObject.isStudentAddressStateError &&
      !studentState.studentObject.isStudentAddressPostalCodeError &&
      !studentState.studentObject.isStudentCellPhoneNumberError &&
      !studentState.studentObject.isStudentHomePhoneNumberError &&
      !studentState.studentObject.isStudentDriversLicenseIdError &&
      !studentState.studentObject.isStudentDriversLicenseIssuedDateError &&
      !studentState.studentObject.isStudentDriversLicenseExpDateError &&
      !studentState.studentObject.isStudentRegisteredCourseIdError &&
      !studentState.studentObject.isStudentPurchasedProductIdError &&
      !studentState.studentObject.isStudentInCarInstIdError 
    ) {
      try {
        await addOneStudentUC(studentState.studentObject);
        studentState.uiModifiersObject.setDataSaved(true);
      } catch (e) {
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
    studentState.uiModifiersObject.setIsLoading(true);

    if (
      !studentState.studentObject.isStudentFirstNameError &&
      !studentState.studentObject.isStudentMiddleNameError &&
      !studentState.studentObject.isStudentLastNameError &&
      !studentState.studentObject.isStudentDateOfBirthError &&
      !studentState.studentObject.isStudentGenderError &&
      !studentState.studentObject.isStudentAddressError &&
      !studentState.studentObject.isStudentAddressCityError &&
      !studentState.studentObject.isStudentAddressStateError &&
      !studentState.studentObject.isStudentAddressPostalCodeError &&
      !studentState.studentObject.isStudentCellPhoneNumberError &&
      !studentState.studentObject.isStudentHomePhoneNumberError &&
      !studentState.studentObject.isStudentDriversLicenseIdError &&
      !studentState.studentObject.isStudentDriversLicenseIssuedDateError &&
      !studentState.studentObject.isStudentDriversLicenseExpDateError &&
      !studentState.studentObject.isStudentRegisteredCourseIdError &&
      !studentState.studentObject.isStudentPurchasedProductIdError &&
      !studentState.studentObject.isStudentInCarInstIdError 
    ) {
      try {
        await editOneStudentUC(studentState.studentObject, studentState.primary_key);
        studentState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        studentState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        studentState.messageObject.setShowMessage(true);
      } catch (e) {
        studentState.messageObject.setMessage("ERROR - Failed to update item in database");
        studentState.messageObject.setMessageColor(AlertVariants.DANGER);
        studentState.messageObject.setShowMessage(true);
      }
    }

    studentState.uiModifiersObject.setAreFieldsEditable(false);
    studentState.uiModifiersObject.setIsLoading(false);
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
    studentState.uiModifiersObject.setIsLoading(true);

    try {
      await deleteOneStudentUC(studentState.primary_key);
      await handleGoBack();
    } catch (e) {
      studentState.messageObject.setMessage("ERROR - Failed to delete item");
      studentState.messageObject.setMessageColor(AlertVariants.DANGER);
      studentState.messageObject.setShowMessage(true);
    }

    studentState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentApplicationFormPdf = async () => {
    studentState.uiModifiersObject.setIsLoading(true);
    try {
      await getFilledStudentApplicationFormPdfUC(studentState.primary_key);
      studentState.messageObject.setMessage(
        "SUCCESS - PDF file should be opened as 'student_application_form_output.pdf'"
      );
      studentState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      studentState.messageObject.setShowMessage(true);
    } catch (e) {
      studentState.messageObject.setMessage(
        "ERROR - please close all instances of 'student_application_form_output.pdf'"
      );
      studentState.messageObject.setMessageColor(AlertVariants.DANGER);
      studentState.messageObject.setShowMessage(true);
    }
    studentState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentInCarEvaluationPdf = async () => {
    studentState.uiModifiersObject.setIsLoading(true);
    try {
      await getFilledStudentInCarEvaluationPdfUC(studentState.primary_key);
      studentState.messageObject.setMessage(
        "SUCCESS - PDF file should be opened as 'student_in_car_evaluation_output.pdf'"
      );
      studentState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      studentState.messageObject.setShowMessage(true);
    } catch (e) {
      studentState.messageObject.setMessage(
        "ERROR - please close all instances of 'student_in_car_evaluation_output.pdf'"
      );
      studentState.messageObject.setMessageColor(AlertVariants.DANGER);
      studentState.messageObject.setShowMessage(true);
    }
    studentState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentInCarRecordPdf = async () => {
    studentState.uiModifiersObject.setIsLoading(true);
    try {
      await getFilledStudentInCarRecordPdfUC(studentState.primary_key);
      studentState.messageObject.setMessage(
        "SUCCESS - PDF file should be opened as 'student_in_car_record_output.pdf'"
      );
      studentState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      studentState.messageObject.setShowMessage(true);
    } catch (e) {
      studentState.messageObject.setMessage("ERROR - please close all instances of 'student_in_car_record_output.pdf'");
      studentState.messageObject.setMessageColor(AlertVariants.DANGER);
      studentState.messageObject.setShowMessage(true);
    }
    studentState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentInvoicePdfUC = async () => {
    studentState.uiModifiersObject.setIsLoading(true);
    try {
      await getFilledStudentInvoicePdfUC(studentState.primary_key);
      studentState.messageObject.setMessage("SUCCESS - PDF file should be opened as 'student_invoice_output.pdf'");
      studentState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      studentState.messageObject.setShowMessage(true);
    } catch (e) {
      studentState.messageObject.setMessage("ERROR - please close all instances of 'student_invoice_output.pdf'");
      studentState.messageObject.setMessageColor(AlertVariants.DANGER);
      studentState.messageObject.setShowMessage(true);
    }
    studentState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetFilledStudentRecordPdf = async () => {
    studentState.uiModifiersObject.setIsLoading(true);
    try {
      await getFilledStudentRecordPdfUC(studentState.primary_key);
      studentState.messageObject.setMessage("SUCCESS - PDF file should be opened as 'student_record_output.pdf'");
      studentState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      studentState.messageObject.setShowMessage(true);
    } catch (e) {
      studentState.messageObject.setMessage("ERROR - please close all instances of 'student_record_output.pdf'");
      studentState.messageObject.setMessageColor(AlertVariants.DANGER);
      studentState.messageObject.setShowMessage(true);
    }
    studentState.uiModifiersObject.setIsLoading(false);
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
