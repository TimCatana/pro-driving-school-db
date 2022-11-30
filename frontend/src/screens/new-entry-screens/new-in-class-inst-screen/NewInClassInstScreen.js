import React, { useState } from "react";
import styled from "styled-components";
import useNewInClassInstScreen from "./useNewInClassInstScreen";
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

const NewInClassInstScreen = () => {
  const {
    isLoading,
    inClassInstFirstName,
    isInClassInstFirstNameError,
    handleInClassInstFirstNameChange,
    inClassInstLastName,
    isInClassInstLastNameError,
    handleInClassInstLastNameChange,
    inClassInstDriversLicense,
    isInClassInstDriversLicenseError,
    handleInClassInstDriversLicenseChange,
    inClassInstDriversLicenseExpDate,
    isInClassInstDriversLicenseExpDateError,
    handleInClassInstDriversLicenseExpDateChange,
    handleAddNewInClassInstructor,
    handleEditInClassInstEntry,
  } = useNewInClassInstScreen();

  const [isInstDriversLicenseFocus, setIsInstDriversLicenseFocus] =
    useState(false);

  const InstDriversLicenseFocusAndBlurHandler = (isFocused) => {
    setIsInstDriversLicenseFocus(isFocused);
  };

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewInClassInstScreen</TitleH1>

        {!isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={70}
                value={inClassInstFirstName}
                onChange={handleInClassInstFirstNameChange}
                placeholder={"First Name"}
              />
              <TextInput
                type="text"
                maxLength={70}
                value={inClassInstLastName}
                onChange={handleInClassInstLastNameChange}
                placeholder={"Last Name"}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={95}
                value={inClassInstDriversLicense}
                onChange={handleInClassInstDriversLicenseChange}
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
                value={inClassInstDriversLicenseExpDate}
                onChange={handleInClassInstDriversLicenseExpDateChange}
                placeholder={"Instructor Drivers License Expiry Date"}
              />
            </SideBySideTextInputsDiv>
          </FormDiv>
        )}

        <ButtonsDiv>
          <Button
            disabled={
              isInClassInstFirstNameError ||
              isInClassInstLastNameError ||
              isInClassInstDriversLicenseError ||
              isInClassInstDriversLicenseExpDateError
            }
            onClick={handleAddNewInClassInstructor}
          >
            Save
          </Button>
          <Button
            disabled={
              isInClassInstFirstNameError ||
              isInClassInstLastNameError ||
              isInClassInstDriversLicenseError ||
              isInClassInstDriversLicenseExpDateError
            }
            onClick={handleEditInClassInstEntry}
          >
            Modify
          </Button>
        </ButtonsDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewInClassInstScreen;
