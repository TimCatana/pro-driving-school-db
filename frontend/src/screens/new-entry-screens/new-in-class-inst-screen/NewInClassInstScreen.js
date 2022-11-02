import React from "react";
import styled from "styled-components";
import useNewInClassInstScreen from "./useNewInClassInstScreen";

const ConfirmButton = styled.button``;
const TextInput = styled.input``;
const DropdownList = styled.select``;
const ListOption = styled.option``;

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
  } = useNewInClassInstScreen();

  return (
    <div>
      <h1>NewInClassInstScreen</h1>
      <TextInput
        type="text"
        value={inClassInstFirstName}
        onChange={handleInClassInstFirstNameChange}
      ></TextInput>
      <TextInput
        type="text"
        value={inClassInstLastName}
        onChange={handleInClassInstLastNameChange}
      ></TextInput>
      <TextInput
        type="text"
        value={inClassInstDriversLicense}
        onChange={handleInClassInstDriversLicenseChange}
      ></TextInput>
      {/* add min date field and use script to get todays date */}
      <TextInput
        type="date"
        value={inClassInstDriversLicenseExpDate}
        onChange={handleInClassInstDriversLicenseExpDateChange}
      />
      <ConfirmButton onClick={handleAddNewInClassInstructor}> Save </ConfirmButton>
    </div>
  );
};

export default NewInClassInstScreen;
