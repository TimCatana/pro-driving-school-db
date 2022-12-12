import React from "react";
import { Button } from "../../../../components";
import { ButtonsDiv } from "../../common/components/styled";

const StudentFormButtons = (props) => {
  const { studentState, studentButtonHandlers } = props;

  return (
    <ButtonsDiv>
      {studentState.uiModifiersObject.isNewEntry && (
        <Button
          disabled={
            studentState.studentObject.isLoading ||
            studentState.studentObject.isStudentFirstNameError ||
            studentState.studentObject.isStudentMiddleNameError ||
            studentState.studentObject.isStudentLastNameError ||
            studentState.studentObject.isStudentDateOfBirthError ||
            studentState.studentObject.isStudentGenderError ||
            studentState.studentObject.isStudentAddressError ||
            studentState.studentObject.isStudentAddressCityError ||
            studentState.studentObject.isStudentAddressStateError ||
            studentState.studentObject.isStudentAddressPostalCodeError ||
            studentState.studentObject.isStudentCellPhoneNumberError ||
            studentState.studentObject.isStudentHomePhoneNumberError ||
            studentState.studentObject.isStudentDriversLicenseIdError ||
            studentState.studentObject.isStudentDriversLicenseIssuedDateError ||
            studentState.studentObject.isStudentDriversLicenseExpDateError ||
            studentState.studentObject.isStudentRegisteredCourseIdError ||
            studentState.studentObject.isStudentPurchasedProductIdError
          }
          onClick={studentButtonHandlers.handleAddNewStudentEntry}
        >
          Save
        </Button>
      )}

      {!studentState.uiModifiersObject.isNewEntry && (
        <>
          {!studentState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={studentState.uiModifiersObject.isLoading}
              onClick={studentButtonHandlers.handleChangeToEditableForm}
            >
              Edit
            </Button>
          )}

          {studentState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={
                studentState.studentObject.isLoading ||
                studentState.studentObject.isStudentFirstNameError ||
                studentState.studentObject.isStudentMiddleNameError ||
                studentState.studentObject.isStudentLastNameError ||
                studentState.studentObject.isStudentDateOfBirthError ||
                studentState.studentObject.isStudentGenderError ||
                studentState.studentObject.isStudentAddressError ||
                studentState.studentObject.isStudentAddressCityError ||
                studentState.studentObject.isStudentAddressStateError ||
                studentState.studentObject.isStudentAddressPostalCodeError ||
                studentState.studentObject.isStudentCellPhoneNumberError ||
                studentState.studentObject.isStudentHomePhoneNumberError ||
                studentState.studentObject.isStudentDriversLicenseIdError ||
                studentState.studentObject.isStudentDriversLicenseIssuedDateError ||
                studentState.studentObject.isStudentDriversLicenseExpDateError ||
                studentState.studentObject.isStudentRegisteredCourseIdError ||
                studentState.studentObject.isStudentPurchasedProductIdError
              }
              onClick={studentButtonHandlers.handleEditStudentEntry}
            >
              Save Edit
            </Button>
          )}
        </>
      )}

      {!studentState.uiModifiersObject.isNewEntry && !studentState.uiModifiersObject.areFieldsEditable && (
        <>
          <Button
            disabled={studentState.uiModifiersObject.isLoading}
            backgroundColor="blue"
            onClick={studentButtonHandlers.handleGetFilledStudentApplicationFormPdf}
          >
            Get Student Application PDF
          </Button>
          <Button
            disabled={studentState.uiModifiersObject.isLoading}
            backgroundColor="blue"
            onClick={studentButtonHandlers.handleGetFilledStudentInCarEvaluationPdf}
          >
            Get Student In Car Evaluation PDF
          </Button>
          <Button
            disabled={studentState.uiModifiersObject.isLoading}
            backgroundColor="blue"
            onClick={studentButtonHandlers.handleGetFilledStudentInCarRecordPdf}
          >
            Get Student In Car Record PDF
          </Button>
          <Button
            disabled={studentState.uiModifiersObject.isLoading}
            backgroundColor="blue"
            onClick={studentButtonHandlers.handleGetFilledStudentInvoicePdfUC}
          >
            Get Student Invoice PDF
          </Button>
          <Button
            disabled={studentState.uiModifiersObject.isLoading}
            backgroundColor="blue"
            onClick={studentButtonHandlers.handleGetFilledStudentRecordPdf}
          >
            Get Student Record PDF
          </Button>
        </>
      )}

      <Button disabled={studentState.uiModifiersObject.isLoading} onClick={studentButtonHandlers.handleGoBack}>
        Go Back
      </Button>
    </ButtonsDiv>
  );
};

export default StudentFormButtons;
