import React from "react";
import { Button } from "../../../../components";
import { ButtonsDiv } from "../../common/components/styled";

const InCarInstructorFormButtons = (props) => {
  const { inCarInstructorState, inCarInstructorButtonHandlers } = props;

  return (
    <ButtonsDiv>
      {inCarInstructorState.uiModifiersObject.isNewEntry && (
        <Button
          disabled={
            inCarInstructorState.uiModifiersObject.isLoading ||
            inCarInstructorState.inCarInstructorObject.isFirstNameError ||
            inCarInstructorState.inCarInstructorObject.isLastNameError ||
            inCarInstructorState.inCarInstructorObject.isInstDriversLicenseIdError ||
            inCarInstructorState.inCarInstructorObject.isInstDriversLicenseExpDateError ||
            inCarInstructorState.inCarInstructorObject.isGDriversLicenseIdError ||
            inCarInstructorState.inCarInstructorObject.isGDriversLicenseExpDateError
          }
          onClick={inCarInstructorButtonHandlers.handleAddNewInCarInstructor}
        >
          Save
        </Button>
      )}

      {!inCarInstructorState.uiModifiersObject.isNewEntry && (
        <>
          {!inCarInstructorState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={inCarInstructorState.uiModifiersObject.isLoading}
              onClick={inCarInstructorButtonHandlers.handleChangeToEditableForm}
            >
              Edit
            </Button>
          )}

          {inCarInstructorState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={
                inCarInstructorState.uiModifiersObject.isLoading ||
                inCarInstructorState.inCarInstructorObject.isFirstNameError ||
                inCarInstructorState.inCarInstructorObject.isLastNameError ||
                inCarInstructorState.inCarInstructorObject.isInstDriversLicenseIdError ||
                inCarInstructorState.inCarInstructorObject.isInstDriversLicenseExpDateError ||
                inCarInstructorState.inCarInstructorObject.isGDriversLicenseIdError ||
                inCarInstructorState.inCarInstructorObject.isGDriversLicenseExpDateError
              }
              onClick={inCarInstructorButtonHandlers.handleEditInCarInstructor}
            >
              Save Edit
            </Button>
          )}
        </>
      )}
      
      <Button
        disabled={inCarInstructorState.uiModifiersObject.isLoading}
        onClick={() => inCarInstructorState.navigation("/?initial_selection=in-car-instructors")}
      >
        Go Back
      </Button>
    </ButtonsDiv>
  );
};

export default InCarInstructorFormButtons;
