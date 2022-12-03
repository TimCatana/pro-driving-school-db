import React, { useState } from "react";
import styled from "styled-components";
import { useNewInClassInstScreen } from "./hooks";

import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
} from "../../../components";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerDiv = styled.div``;

const TitleH1 = styled.h1`
  text-align: center;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

// const ConfirmButton = styled.button``;
// const TextInput = styled.input``;
// const DropdownList = styled.select``;
// const ListOption = styled.option``;

const NewInClassInstScreen = () => {
  const {
    inClassInstructorState,
    InClassInstructorChangeHandlers,
    inClassInstructorButtonHandlers,
  } = useNewInClassInstScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewInClassInstScreen</TitleH1>

        {!inClassInstructorState.isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={70}
                value={
                  inClassInstructorState.inClassInstructorObject.iciFirstName
                }
                onChange={
                  InClassInstructorChangeHandlers.handleInClassInstFirstNameChange
                }
                placeholder={"First Name"}
              />
              <TextInput
                type="text"
                maxLength={70}
                value={
                  inClassInstructorState.inClassInstructorObject.iciLastName
                }
                onChange={
                  InClassInstructorChangeHandlers.handleInClassInstLastNameChange
                }
                placeholder={"Last Name"}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={95}
                value={
                  inClassInstructorState.inClassInstructorObject
                    .iciDriversLicenseNum
                }
                onChange={
                  InClassInstructorChangeHandlers.handleInClassInstDriversLicenseNumChange
                }
                placeholder={"Instructor Driver's License"}
              />
              {/* add min date field and use script to get todays date */}
              <TextInput
                type={
                  inClassInstructorState.isICIDriversLicenseFocus
                    ? "date"
                    : "text"
                }
                onFocus={() => {
                  InClassInstructorChangeHandlers.handleICIDriversLicenseFocusAndBlurHandler(
                    true
                  );
                }}
                onBlur={() => {
                  InClassInstructorChangeHandlers.handleICIDriversLicenseFocusAndBlurHandler(
                    false
                  );
                }}
                value={
                  inClassInstructorState.inClassInstructorObject
                    .iciDriversLicenseExpDate
                }
                onChange={
                  InClassInstructorChangeHandlers.handleInClassInstDriversLicenseExpDateChange
                }
                placeholder={"Instructor Drivers License Expiry Date"}
              />
            </SideBySideTextInputsDiv>
          </FormDiv>
        )}

        <ButtonsDiv>
          {inClassInstructorState.isNewEntry && (
            <Button
              disabled={
                inClassInstructorState.inClassInstructorObject
                  .isICIFirstNameError ||
                inClassInstructorState.inClassInstructorObject
                  .isICILastNameError ||
                inClassInstructorState.inClassInstructorObject
                  .isICIDriversLicenseNumError ||
                inClassInstructorState.inClassInstructorObject
                  .isICIDriversLicenseExpDateError
              }
              onClick={
                inClassInstructorButtonHandlers.handleAddNewInClassInstructor
              }
            >
              Save
            </Button>
          )}
          {!inClassInstructorState.isNewEntry && (
            <Button
              disabled={
                inClassInstructorState.inClassInstructorObject
                  .isICIFirstNameError ||
                inClassInstructorState.inClassInstructorObject
                  .isICILastNameError ||
                inClassInstructorState.inClassInstructorObject
                  .isICIDriversLicenseNumError ||
                inClassInstructorState.inClassInstructorObject
                  .isICIDriversLicenseExpDateError
              }
              onClick={
                inClassInstructorButtonHandlers.handleEditInClassInstEntry
              }
            >
              Modify
            </Button>
          )}
          <Button onClick={() => inClassInstructorState.navigation("/")}>
            Go Back
          </Button>
        </ButtonsDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewInClassInstScreen;
