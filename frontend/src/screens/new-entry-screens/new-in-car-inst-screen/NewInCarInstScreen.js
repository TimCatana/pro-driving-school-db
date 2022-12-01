import React, { useState } from "react";
import styled from "styled-components";
import useNewInCarInstScreen from "./useNewInCarInstScreen";
import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
} from "../../../components/common";

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

const NewInCarInstScreen = () => {
  const {
    inCarInstructorState,
    inCarInstructorChangeHandlers,
    inCarInstructorButtonHandlers,
  } = useNewInCarInstScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewInCarInstScreen</TitleH1>

        {!inCarInstructorState.isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={70}
                value={inCarInstructorState.inCarInstructorObject.iciFirstName}
                onChange={
                  inCarInstructorChangeHandlers.handleInCarInstFirstNameChange
                }
                placeholder={"First Name"}
              />
              <TextInput
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
                      .isICIDriversLicenseExpDate ||
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
                      .isICIDriversLicenseExpDate ||
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

              <Button onClick={() => inCarInstructorState.navigation("/home")}>
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
