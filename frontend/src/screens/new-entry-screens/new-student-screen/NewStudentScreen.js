import React from "react";
import styled from "styled-components";
import useNewStudentScreen from "./useNewStudentScreen";

const ConfirmButton = styled.button``;
const TextInput = styled.input``;
const DropdownList = styled.select``;
const ListOption = styled.option``;

const NewStudentScreen = () => {
  const {
    isLoading,

    studentFirstName,
    isStudentFirstNameError,
    handleStudentFirstNameChange,

    studentMiddleName,
    isStudentMiddleNameError,
    handleStudentMiddleNameChange,

    studentLastName,
    isStudentLastNameError,
    handleStudentLastNameChange,

    studentDateOfBirth,
    isStudentDateOfBirthError,
    handleStudentDateOfBirthChange,

    studentGender,
    isStudentGenderError,
    handleStudentGenderChange,

    studentCellPhoneNumber,
    isStudentCellPhoneNumberError,
    handleStudentCellPhoneNumberChange,

    studentHomePhoneNumber,
    isStudentHomePhoneNumberError,
    handleStudentHomePhoneNumberChange,

    studentAddress,
    isStudentAddressError,
    handleStudentAddressChange,

    studentAddressCity,
    isStudentAddressCityError,
    handleStudentAddressCityChange,

    studentAddressPostalCode,
    isStudentAddressPostalCodeError,
    handleStudentAddressPostalCodeChange,

    studentDriversLicenseNumber,
    isStudentDriversLicenseNumberError,
    handleStudentDriversLicenseNumberChange,

    studentDriversLicenseNumberIssuedDate,
    isStudentDriversLicenseNumberIssuedDateError,
    handleStudentDriversLicenseNumberIssuedDateChange,

    studentDriversLicenseNumberExpDate,
    isStudentDriversLicenseNumberExpDateError,
    handleStudentDriversLicenseNumberExpDateChange,

    studentRegisteredCourseId,
    isStudentRegisteredCourseIdError,
    handleStudentRegisteredCourseId,

    studentRegisteredProductId,
    isStudentRegisteredProductIdError,
    handleStudentRegisteredProductId,

    handleAddNewStudentEntry,
    handleEditStudentEntry,
  } = useNewStudentScreen();

  return (
    <div>
      <h1>NewStudentScreen</h1>
      <TextInput
        type="text"
        value={studentFirstName}
        onChange={handleStudentFirstNameChange}
      />
      <TextInput
        type="text"
        value={studentMiddleName}
        onChange={handleStudentMiddleNameChange}
      />
      <TextInput
        type="text"
        value={studentLastName}
        onChange={handleStudentLastNameChange}
      />
      <TextInput
        type="date"
        value={studentDateOfBirth}
        onChange={handleStudentDateOfBirthChange}
      />

      <DropdownList name="genderList" onChange={handleStudentGenderChange}>
        <ListOption value={"M"}>Male</ListOption>
        <ListOption value={"F"}>Female</ListOption>
      </DropdownList>

      <TextInput
        type="text"
        value={studentCellPhoneNumber}
        onChange={handleStudentCellPhoneNumberChange}
      />
      <TextInput
        type="text"
        value={studentHomePhoneNumber}
        onChange={handleStudentHomePhoneNumberChange}
      />
      <TextInput
        type="text"
        value={studentAddress}
        onChange={handleStudentAddressChange}
      />
      <TextInput
        type="text"
        value={studentAddressCity}
        onChange={handleStudentAddressCityChange}
      />
      <TextInput
        type="text"
        value={studentAddressPostalCode}
        onChange={handleStudentAddressPostalCodeChange}
      />
      <TextInput
        type="text"
        value={studentDriversLicenseNumber}
        onChange={handleStudentDriversLicenseNumberChange}
      />

      {/* add min date field and use script to get todays date */}
      <TextInput
        type="date"
        value={studentDriversLicenseNumberIssuedDate}
        onChange={handleStudentDriversLicenseNumberIssuedDateChange}
      />

      {/* should be auto populated as 5 years after the */}
      <TextInput
        type="date"
        value={studentDriversLicenseNumberExpDate}
        onChange={handleStudentDriversLicenseNumberExpDateChange}
      />

      {/* get the courses from database and but them in the options */}
      <DropdownList
        name="courseIdList"
        onChange={handleStudentRegisteredCourseId}
      >
        <ListOption value={"123"}>123</ListOption>
        <ListOption value={"321"}>321</ListOption>
      </DropdownList>

      {/* get the products from database and but them in the options */}
      <DropdownList
        name="productIdList"
        onChange={handleStudentRegisteredProductId}
      >
        <ListOption value={"ABC"}>ABC</ListOption>
        <ListOption value={"CBA"}>CBA</ListOption>
      </DropdownList>

      {/* should be a dropdown list of all available instructors*/}
      <ConfirmButton onClick={handleAddNewStudentEntry}> Save </ConfirmButton>
      <ConfirmButton onClick={handleEditStudentEntry}>Modify</ConfirmButton>
    </div>
  );
};

export default NewStudentScreen;
