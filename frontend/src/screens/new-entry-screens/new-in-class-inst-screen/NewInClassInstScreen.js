import React from "react";
import { useNewInClassInstScreen } from "./hooks";

import {
  Button,
  TextInput,
  SideBySideTextInputsDiv,
  Title,
} from "../../../components";
import {
  WrapperDiv,
  ContainerDiv,
  FormDiv,
  ButtonsDiv,
} from "../common/components/styled";

const NewInClassInstScreen = () => {
  const {
    inClassInstructorState,
    InClassInstructorChangeHandlers,
    inClassInstructorButtonHandlers,
  } = useNewInClassInstScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <Title>NewInClassInstScreen</Title>

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
                isLast
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
              <TextInput
                isLast
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
