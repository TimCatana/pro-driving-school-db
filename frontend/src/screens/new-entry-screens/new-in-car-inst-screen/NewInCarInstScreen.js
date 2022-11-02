import React from "react";
import styled from "styled-components";
import useNewInCarInstScreen from "./useNewInCarInstScreen";

const ConfirmButton = styled.button``;
const TextInput = styled.input``;
const DropdownList = styled.select``;
const ListOption = styled.option``;

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
  } = useNewInCarInstScreen();

  return (
    <div>
      <h1>NewInCarInstScreen</h1>
      <TextInput
        type="text"
        value={inCarInstFirstName}
        onChange={handleInCarInstFirstNameChange}
      ></TextInput>
      <TextInput
        type="text"
        value={inCarInstLastName}
        onChange={handleInCarInstLastNameChange}
      ></TextInput>
      <TextInput
        type="text"
        value={inCarInstDriversLicense}
        onChange={handleInCarInstDriversLicenseChange}
      ></TextInput>
      {/* add min date field and use script to get todays date */}
      <TextInput
        type="date"
        value={inCarInstDriversLicenseExpDate}
        onChange={handleInCarInstDriversLicenseExpDateChange}
      />
      <TextInput
        type="text"
        value={inCarInstGLicense}
        onChange={handleInCarInstGLicenseChange}
      ></TextInput>
      {/* add min date field and use script to get todays date */}
      <TextInput
        type="date"
        value={inCarInstGLicenseExpDate}
        onChange={handleInCarInstGLicenseExpDateChange}
      />
      <ConfirmButton onClick={handleAddNewInCarInstructor}>Save</ConfirmButton>
    </div>
  );
};

export default NewInCarInstScreen;
