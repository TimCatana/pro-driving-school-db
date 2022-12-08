import React, { useState } from "react";
import styled from "styled-components";
import { useNewInCarInstScreen } from "./hooks";
import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
  Title,
} from "../../../components";
import {
  WrapperDiv,
  ContainerDiv,
  FormDiv,
  ButtonsDiv,
} from "../common/components/styled";

const NewInCarInstScreen = () => {
  const {
    inCarInstructorState,
    inCarInstructorChangeHandlers,
    inCarInstructorButtonHandlers,
  } = useNewInCarInstScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <Title>NewInCarInstScreen</Title>

        {!inCarInstructorState.isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                isError={
                  inCarInstructorState.inCarInstructorObject
                    .isICIFirstNameError &&
                  inCarInstructorState.inCarInstructorObject.iciFirstName
                    .length > 0
                }
                type="text"
                maxLength={70}
                value={inCarInstructorState.inCarInstructorObject.iciFirstName}
                onChange={
                  inCarInstructorChangeHandlers.handleInCarInstFirstNameChange
                }
                placeholder={"First Name"}
              />
              <TextInput
                isError={
                  inCarInstructorState.inCarInstructorObject
                    .isICILastNameError &&
                  inCarInstructorState.inCarInstructorObject.iciLastName
                    .length > 0
                }
                type="text"
                maxLength={70}
                value={inCarInstructorState.inCarInstructorObject.iciLastName}
                onChange={
                  inCarInstructorChangeHandlers.handleInCarInstLastNameChange
                }
                placeholder={"Last Name"}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                isError={
                  inCarInstructorState.inCarInstructorObject
                    .isICIDriversLicenseNumError &&
                  inCarInstructorState.inCarInstructorObject
                    .iciDriversLicenseNum.length > 0
                }
                type="text"
                maxLength={95}
                value={
                  inCarInstructorState.inCarInstructorObject
                    .iciDriversLicenseNum
                }
                onChange={
                  inCarInstructorChangeHandlers.handleInCarInstDriversLicenseNumChange
                }
                placeholder={"Instructor Driver's License"}
              />
              {/* add min date field and use script to get todays date */}
              <TextInput
                isError={
                  inCarInstructorState.inCarInstructorObject
                    .isICIDriversLicenseExpDateError &&
                  inCarInstructorState.inCarInstructorObject
                    .iciDriversLicenseExpDate.length > 0
                }
                type={
                  inCarInstructorState.isICIInstDriversLicenseFocus
                    ? "date"
                    : "text"
                }
                onFocus={() => {
                  inCarInstructorChangeHandlers.handleICIDriversLicenseFocusAndBlurHandler(
                    true
                  );
                }}
                onBlur={() => {
                  inCarInstructorChangeHandlers.handleICIDriversLicenseFocusAndBlurHandler(
                    false
                  );
                }}
                value={
                  inCarInstructorState.inCarInstructorObject
                    .iciDriversLicenseExpDate
                }
                onChange={
                  inCarInstructorChangeHandlers.handleInCarInstDriversLicenseExpDateChange
                }
                placeholder={"Instructor Drivers License Expiry Date"}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                isError={
                  inCarInstructorState.inCarInstructorObject
                    .isICIGLicenseNumError &&
                  inCarInstructorState.inCarInstructorObject.iciGLicenseNum
                    .length > 0
                }
                type="text"
                maxLength={95}
                value={
                  inCarInstructorState.inCarInstructorObject.iciGLicenseNum
                }
                onChange={
                  inCarInstructorChangeHandlers.handleInCarInstGLicenseNumChange
                }
                placeholder={"G Driver's License"}
              />
              {/* add min date field and use script to get todays date */}
              <TextInput
                isError={
                  inCarInstructorState.inCarInstructorObject
                    .isICIGLicenseExpDateError &&
                  inCarInstructorState.inCarInstructorObject.iciGLicenseExpDate
                    .length > 0
                }
                type={
                  inCarInstructorState.isICIGDriversLicenseFocus
                    ? "date"
                    : "text"
                }
                onFocus={() => {
                  inCarInstructorChangeHandlers.handleICIGDriversLicenseFocusAndBlurHandler(
                    true
                  );
                }}
                onBlur={() => {
                  inCarInstructorChangeHandlers.handleICIGDriversLicenseFocusAndBlurHandler(
                    false
                  );
                }}
                value={
                  inCarInstructorState.inCarInstructorObject.iciGLicenseExpDate
                }
                onChange={
                  inCarInstructorChangeHandlers.handleInCarInstGLicenseExpDateChange
                }
                placeholder={"G Drivers License Expiry Date"}
              />
            </SideBySideTextInputsDiv>

            <ButtonsDiv>
              {inCarInstructorState.isNewEntry && (
                <Button
                  disabled={
                    inCarInstructorState.inCarInstructorObject
                      .isICIFirstNameError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICILastNameError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIDriversLicenseNumError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIDriversLicenseExpDateError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIGLicenseNumError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIGLicenseExpDateError
                  }
                  onClick={
                    inCarInstructorButtonHandlers.handleAddNewInCarInstructor
                  }
                >
                  Save
                </Button>
              )}
              {!inCarInstructorState.isNewEntry && (
                <Button
                  disabled={
                    inCarInstructorState.inCarInstructorObject
                      .isICIFirstNameError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICILastNameError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIDriversLicenseNumError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIDriversLicenseExpDateError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIGLicenseNumError ||
                    inCarInstructorState.inCarInstructorObject
                      .isICIGLicenseExpDateError
                  }
                  onClick={
                    inCarInstructorButtonHandlers.handleEditInCarInstructor
                  }
                >
                  Modify
                </Button>
              )}

              <Button onClick={() => inCarInstructorState.navigation("/")}>
                Go Back
              </Button>
            </ButtonsDiv>
          </FormDiv>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewInCarInstScreen;
