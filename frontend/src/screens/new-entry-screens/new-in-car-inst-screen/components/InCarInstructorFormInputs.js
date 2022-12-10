import React from "react";
import { SideBySideTextInputsDiv, TextInput } from "../../../../components";
import { FormDiv } from "../../common/components/styled";

const InCarInstructorFormInputs = (props) => {
  const { inCarInstructorState, inCarInstructorChangeHandlers } = props;

  return (
    <FormDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"First Name"}
          disabled={
            inCarInstructorState.uiModifiersObject.isLoading ||
            !inCarInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inCarInstructorState.inCarInstructorObject.firstName}
          onChange={inCarInstructorChangeHandlers.handleInCarInstFirstNameChange}
          isError={
            inCarInstructorState.inCarInstructorObject.isFirstNameError &&
            inCarInstructorState.inCarInstructorObject.firstName.length > 0
          }
          type="text"
          maxLength={70}
        />
        <TextInput
          placeholder={"Last Name"}
          disabled={
            inCarInstructorState.uiModifiersObject.isLoading ||
            !inCarInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inCarInstructorState.inCarInstructorObject.lastName}
          onChange={inCarInstructorChangeHandlers.handleInCarInstLastNameChange}
          isError={
            inCarInstructorState.inCarInstructorObject.isLastNameError &&
            inCarInstructorState.inCarInstructorObject.lastName.length > 0
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
            inCarInstructorState.uiModifiersObject.isLoading ||
            !inCarInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inCarInstructorState.inCarInstructorObject.instDriversLicenseId}
          onChange={inCarInstructorChangeHandlers.handleInCarInstDriversLicenseNumChange}
          isError={
            inCarInstructorState.inCarInstructorObject.isInstDriversLicenseIdError &&
            inCarInstructorState.inCarInstructorObject.instDriversLicenseId.length > 0
          }
          type="text"
          maxLength={95}
        />
        {/* add min date field and use script to get todays date */}
        <TextInput
          placeholder={"Instructor Driver's License Expiry Date"}
          disabled={
            inCarInstructorState.uiModifiersObject.isLoading ||
            !inCarInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inCarInstructorState.inCarInstructorObject.instDriversLicenseExpDate}
          onChange={inCarInstructorChangeHandlers.handleInCarInstDriversLicenseExpDateChange}
          isError={
            inCarInstructorState.inCarInstructorObject.isInstDriversLicenseExpDateError &&
            inCarInstructorState.inCarInstructorObject.instDriversLicenseExpDate.length > 0
          }
          onFocus={() => {
            inCarInstructorChangeHandlers.handleInstDriversLicenseFocusAndBlurHandler(true);
          }}
          onBlur={() => {
            inCarInstructorChangeHandlers.handleInstDriversLicenseFocusAndBlurHandler(false);
          }}
          type={inCarInstructorState.dateTextInputFocusesObject.isInstDriversLicenseFocus ? "date" : "text"}
          isLast
        />
      </SideBySideTextInputsDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"G Driver's License"}
          disabled={
            inCarInstructorState.uiModifiersObject.isLoading ||
            !inCarInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inCarInstructorState.inCarInstructorObject.gDriversLicenseId}
          onChange={inCarInstructorChangeHandlers.handleInCarInstGLicenseNumChange}
          isError={
            inCarInstructorState.inCarInstructorObject.isGDriversLicenseIdError &&
            inCarInstructorState.inCarInstructorObject.gDriversLicenseId.length > 0
          }
          type="text"
          maxLength={95}
        />
        {/* add min date field and use script to get todays date */}
        <TextInput
          placeholder={"G Drivers License Expiry Date"}
          disabled={
            inCarInstructorState.uiModifiersObject.isLoading ||
            !inCarInstructorState.uiModifiersObject.areFieldsEditable
          }
          value={inCarInstructorState.inCarInstructorObject.gDriversLicenseExpDate}
          onChange={inCarInstructorChangeHandlers.handleInCarInstGLicenseExpDateChange}
          isError={
            inCarInstructorState.inCarInstructorObject.isGDriversLicenseExpDateError &&
            inCarInstructorState.inCarInstructorObject.gDriversLicenseExpDate.length > 0
          }
          onFocus={() => {
            inCarInstructorChangeHandlers.handleGDriversLicenseFocusAndBlurHandler(true);
          }}
          onBlur={() => {
            inCarInstructorChangeHandlers.handleGDriversLicenseFocusAndBlurHandler(false);
          }}
          type={inCarInstructorState.dateTextInputFocusesObject.isGDriversLicenseFocus ? "date" : "text"}
          isLast
        />
      </SideBySideTextInputsDiv>
    </FormDiv>
  );
};

export default InCarInstructorFormInputs;
