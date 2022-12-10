import React from "react";
import { Button } from "../../../../components";
import { ButtonsDiv } from "../../common/components/styled";

const InClassInstructorFormButtons = (props) => {
  const { inClassInstructorState, inClassInstructorButtonHandlers } = props;

  return (
    <ButtonsDiv>
      {inClassInstructorState.uiModifiersObject.isNewEntry && (
        <Button
          disabled={
            inClassInstructorState.uiModifiersObject.isLoading ||
            inClassInstructorState.inClassInstructorObject.isFirstNameError ||
            inClassInstructorState.inClassInstructorObject.isLastNameError ||
            inClassInstructorState.inClassInstructorObject.isDriversLicenseIdError ||
            inClassInstructorState.inClassInstructorObject.isDriversLicenseExpDateError
          }
          onClick={inClassInstructorButtonHandlers.handleAddNewInClassInstructor}
        >
          Save
        </Button>
      )}

      {!inClassInstructorState.uiModifiersObject.isNewEntry && (
        <>
          {!inClassInstructorState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={inClassInstructorState.uiModifiersObject.isLoading}
              onClick={inClassInstructorButtonHandlers.handleChangeToEditableForm}
            >
              Edit
            </Button>
          )}

          {inClassInstructorState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={
                inClassInstructorState.uiModifiersObject.isLoading ||
                inClassInstructorState.inClassInstructorObject.isFirstNameError ||
                inClassInstructorState.inClassInstructorObject.isLastNameError ||
                inClassInstructorState.inClassInstructorObject.isDriversLicenseIdError ||
                inClassInstructorState.inClassInstructorObject.isDriversLicenseExpDateError
              }
              onClick={inClassInstructorButtonHandlers.handleEditInClassInstEntry}
            >
              Save Edit
            </Button>
          )}
        </>
      )}

      <Button
        disabled={inClassInstructorState.uiModifiersObject.isLoading}
        onClick={() => inClassInstructorState.navigation("/?initial_selection=in-class-instructors")}
      >
        Go Back
      </Button>
    </ButtonsDiv>
  );
};

export default InClassInstructorFormButtons;
