import React from "react";
import { SideBySideTextInputsDiv, TextInput } from "../../../../components";
import { FormDiv } from "../../common/components/styled";

const InClassInstructorFormInputs = (props) => {
  const { inClassInstructorState, InClassInstructorChangeHandlers } = props;

  return (
    <FormDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"First Name"}
          disabled={
            inClassInstructorState.uiModifiersObject.isLoading ||
            !inClassInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inClassInstructorState.inClassInstructorObject.firstName}
          onChange={InClassInstructorChangeHandlers.handleInClassInstFirstNameChange}
          isError={
            inClassInstructorState.inClassInstructorObject.isFirstNameError &&
            inClassInstructorState.inClassInstructorObject.firstName.length > 0
          }
          type="text"
          maxLength={70}
        />
        <TextInput
          placeholder={"Last Name"}
          disabled={
            inClassInstructorState.uiModifiersObject.isLoading ||
            !inClassInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inClassInstructorState.inClassInstructorObject.lastName}
          onChange={InClassInstructorChangeHandlers.handleInClassInstLastNameChange}
          isError={
            inClassInstructorState.inClassInstructorObject.isLastNameError &&
            inClassInstructorState.inClassInstructorObject.lastName.length > 0
          }
          type="text"
          maxLength={70}
          isLast
        />
      </SideBySideTextInputsDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"Instructor Driver's License"}
          disabled={
            inClassInstructorState.uiModifiersObject.isLoading ||
            !inClassInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inClassInstructorState.inClassInstructorObject.driversLicenseId}
          onChange={InClassInstructorChangeHandlers.handleInClassInstDriversLicenseNumChange}
          isError={
            inClassInstructorState.inClassInstructorObject.isDriversLicenseIdError &&
            inClassInstructorState.inClassInstructorObject.driversLicenseId.length > 0
          }
          type="text"
          maxLength={95}
        />
        <TextInput
          placeholder={"Instructor Drivers License Expiry Date"}
          disabled={
            inClassInstructorState.uiModifiersObject.isLoading ||
            !inClassInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inClassInstructorState.inClassInstructorObject.driversLicenseExpDate}
          onChange={InClassInstructorChangeHandlers.handleInClassInstDriversLicenseExpDateChange}
          isError={
            inClassInstructorState.inClassInstructorObject.isDriversLicenseExpDateError &&
            inClassInstructorState.inClassInstructorObject.driversLicenseExpDate.length > 0
          }
          onFocus={() => {
            InClassInstructorChangeHandlers.handleDriversLicenseFocusAndBlurHandler(true);
          }}
          onBlur={() => {
            InClassInstructorChangeHandlers.handleDriversLicenseFocusAndBlurHandler(false);
          }}
          type={inClassInstructorState.dateTextInputFocusesObject.isInstDriversLicenseFocus ? "date" : "text"}
          isLast
        />
      </SideBySideTextInputsDiv>
    </FormDiv>
  );
};

export default InClassInstructorFormInputs;
