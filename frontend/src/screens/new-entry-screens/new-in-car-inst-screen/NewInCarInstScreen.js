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

// const ConfirmButton = styled.button``;
// const TextInput = styled.input``;
// const DropdownList = styled.select``;
// const ListOption = styled.option``;

const NewInCarInstScreen = () => {
  const {
    isLoading,
    inCarInstFirstName,
    isInCarInstFirstNameError,
    handleInCarInstFirstNameChange,
    inCarInstLastName,
    isInCarInstLastNameError,
    handleInCarInstLastNameChange,
    inCarInstDriversLicense,
    isInCarInstDriversLicenseError,
    handleInCarInstDriversLicenseChange,
    inCarInstDriversLicenseExpDate,
    isInCarInstDriversLicenseExpDateError,
    handleInCarInstDriversLicenseExpDateChange,
    inCarInstGLicense,
    isInCarInstGLicenseError,
    handleInCarInstGLicenseChange,
    inCarInstGLicenseExpDate,
    isInCarInstGLicenseExpDateError,
    handleInCarInstGLicenseExpDateChange,
    handleAddNewInCarInstructor,
    handleEditInCarInstEntry,
  } = useNewInCarInstScreen();

  const [isInstDriversLicenseFocus, setIsInstDriversLicenseFocus] =
    useState(false);
  const [isGDriversLicenseFocus, setGDriversLicenseFocus] = useState(false);

  const InstDriversLicenseFocusAndBlurHandler = (isFocused) => {
    setIsInstDriversLicenseFocus(isFocused);
  };
  const GDriversLicenseFocusAndBlurHandler = (isFocused) => {
    setGDriversLicenseFocus(isFocused);
  };

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewInCarInstScreen</TitleH1>

        {!isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={70}
                value={inCarInstFirstName}
                onChange={handleInCarInstFirstNameChange}
                placeholder={"First Name"}
              />
              <TextInput
                type="text"
                maxLength={70}
                value={inCarInstLastName}
                onChange={handleInCarInstLastNameChange}
                placeholder={"Last Name"}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={95}
                value={inCarInstDriversLicense}
                onChange={handleInCarInstDriversLicenseChange}
                placeholder={"Instructor Driver's License"}
              />
              {/* add min date field and use script to get todays date */}
              <TextInput
                type={isInstDriversLicenseFocus ? "date" : "text"}
                onFocus={() => {
                  InstDriversLicenseFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  InstDriversLicenseFocusAndBlurHandler(false);
                }}
                value={inCarInstDriversLicenseExpDate}
                onChange={handleInCarInstDriversLicenseExpDateChange}
                placeholder={"Instructor Drivers License Expiry Date"}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={95}
                value={inCarInstGLicense}
                onChange={handleInCarInstGLicenseChange}
                placeholder={"G Driver's License"}
              />
              {/* add min date field and use script to get todays date */}
              <TextInput
                type={isGDriversLicenseFocus ? "date" : "text"}
                onFocus={() => {
                  GDriversLicenseFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  GDriversLicenseFocusAndBlurHandler(false);
                }}
                value={inCarInstGLicenseExpDate}
                onChange={handleInCarInstGLicenseExpDateChange}
                placeholder={"G Drivers License Expiry Date"}
              />
            </SideBySideTextInputsDiv>

            <ButtonsDiv>
              <Button
                disabled={
                  isInCarInstFirstNameError ||
                  isInCarInstLastNameError ||
                  isInCarInstDriversLicenseError ||
                  isInCarInstDriversLicenseExpDateError ||
                  isInCarInstGLicenseError ||
                  isInCarInstGLicenseExpDateError
                }
                onClick={handleAddNewInCarInstructor}
              >
                Save
              </Button>
              <Button
                disabled={
                  isInCarInstFirstNameError ||
                  isInCarInstLastNameError ||
                  isInCarInstDriversLicenseError ||
                  isInCarInstDriversLicenseExpDateError ||
                  isInCarInstGLicenseError ||
                  isInCarInstGLicenseExpDateError
                }
                onClick={handleEditInCarInstEntry}
              >
                Modify
              </Button>
            </ButtonsDiv>
          </FormDiv>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewInCarInstScreen;
