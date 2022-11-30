import React, { useState } from "react";
import styled from "styled-components";
import useNewStudentScreen from "./useNewStudentScreen";

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
    Genders,
    courses,
    products,

    selectedGender,
    selectedRegisteredCourse,
    selectedRegisteredProduct,
  } = useNewStudentScreen();

  const [isDateOfBirthFocus, setIsDateOfBirthFocus] = useState(false);
  const [
    isStudentDriversLicenseIssuedDateFocus,
    setIsStudentDriversLicenseIssuedDateFocus,
  ] = useState(false);
  // const [isDateOfBirthFocus, setIsDateOfBirthFocus] = useState(false);

  const dateOfBirthFocusAndBlurHandler = (isFocused) => {
    setIsDateOfBirthFocus(isFocused);
  };
  const studentDriversLicenseIssuedDateFocusAndBlurHandler = (isFocused) => {
    setIsStudentDriversLicenseIssuedDateFocus(isFocused);
  };

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewStudentScreen</TitleH1>

        {!isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={70}
                value={studentFirstName}
                onChange={handleStudentFirstNameChange}
                placeholder={"First Name"}
              />
              <TextInput
                type="text"
                maxLength={70}
                value={studentMiddleName}
                onChange={handleStudentMiddleNameChange}
                placeholder={"Middle Name (Optional)"}
              />
              <TextInput
                type="text"
                maxLength={70}
                value={studentLastName}
                onChange={handleStudentLastNameChange}
                placeholder={"Last Name"}
              />
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                type={isDateOfBirthFocus ? "date" : "text"}
                onFocus={() => {
                  dateOfBirthFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  dateOfBirthFocusAndBlurHandler(false);
                }}
                value={studentDateOfBirth}
                onChange={handleStudentDateOfBirthChange}
                placeholder={"Date Of Birth"}
              />

              <DropDownMenu
                name="genderList"
                defaultValue={selectedGender}
                onChange={handleStudentGenderChange}
              >
                <ListOption value={"label"} disabled hidden>
                  Please Select Gender
                </ListOption>
                <ListOption value={Genders.MALE}>Male</ListOption>
                <ListOption value={Genders.FEMALE}>Female</ListOption>
                <ListOption value={Genders.NOT_DECLARED}>
                  Not Declared
                </ListOption>
              </DropDownMenu>
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={18}
                placeholder="Cell Phone (Format: 5194567890)"
                value={studentCellPhoneNumber}
                onChange={handleStudentCellPhoneNumberChange}
              />
              <TextInput
                type="text"
                maxLength={18}
                placeholder="Home Phone (Format: 5194567890)"
                value={studentHomePhoneNumber}
                onChange={handleStudentHomePhoneNumberChange}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={145}
                value={studentAddress}
                onChange={handleStudentAddressChange}
                placeholder={"Address (Ex. 123 main st)"}
              />
              <TextInput
                type="text"
                maxLength={145}
                value={studentAddressCity}
                onChange={handleStudentAddressCityChange}
                placeholder={"City"}
              />
              <TextInput
                type="text"
                maxLength={18}
                value={studentAddressPostalCode}
                onChange={handleStudentAddressPostalCodeChange}
                placeholder={"Postal Code"}
              />
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                value={studentDriversLicenseNumber}
                onChange={handleStudentDriversLicenseNumberChange}
                placeholder={"Driver's License Number"}
              />

              {/* add min date field and use script to get todays date */}
              <TextInput
                type={isStudentDriversLicenseIssuedDateFocus ? "date" : "text"}
                onFocus={() => {
                  studentDriversLicenseIssuedDateFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  studentDriversLicenseIssuedDateFocusAndBlurHandler(false);
                }}
                value={studentDriversLicenseNumberIssuedDate}
                onChange={handleStudentDriversLicenseNumberIssuedDateChange}
                placeholder={"Driver's License Issued Date"}
              />

              {/* should be auto populated as 5 years after the */}
              <TextInput
                type="text"
                disabled
                value={studentDriversLicenseNumberExpDate}
                onChange={handleStudentDriversLicenseNumberExpDateChange}
                placeholder={"Driver's License Expiry Date"}
              />
            </SideBySideTextInputsDiv>

            <SingleRowTextInputDiv>
              {/* get the courses from database and but them in the options */}
              <DropDownMenu
                name="courseIdList"
                defaultValue={selectedRegisteredCourse}
                onChange={handleStudentRegisteredCourseId}
              >
                <ListOption value={"label"} disabled hidden>
                  Which Course Is The Student Registered?
                </ListOption>
                {courses.map((data) => (
                  <ListOption key={data.id} value={data.id}>
                    {data.courseId}
                  </ListOption>
                ))}
              </DropDownMenu>
            </SingleRowTextInputDiv>

            <SingleRowTextInputDiv>
              {/* get the products from database and but them in the options */}
              <DropDownMenu
                name="productIdList"
                defaultValue={selectedRegisteredProduct}
                onChange={handleStudentRegisteredProductId}
              >
                <ListOption value={"label"} disabled hidden>
                  Which Product Is The Student Registered?
                </ListOption>
                {products.map((data) => (
                  <ListOption key={data.id} value={data.id}>
                    {data.productId}
                  </ListOption>
                ))}
              </DropDownMenu>
            </SingleRowTextInputDiv>

            {/* should be a dropdown list of all available instructors*/}
            <ButtonsDiv>
              <Button
                disabled={
                  isStudentFirstNameError ||
                  isStudentMiddleNameError ||
                  isStudentLastNameError ||
                  isStudentDateOfBirthError ||
                  isStudentGenderError ||
                  isStudentCellPhoneNumberError ||
                  isStudentHomePhoneNumberError ||
                  isStudentAddressError ||
                  isStudentAddressCityError ||
                  isStudentAddressPostalCodeError ||
                  isStudentDriversLicenseNumberError ||
                  isStudentDriversLicenseNumberIssuedDateError ||
                  isStudentDriversLicenseNumberExpDateError ||
                  isStudentRegisteredCourseIdError ||
                  isStudentRegisteredProductIdError
                }
                onClick={handleAddNewStudentEntry}
              >
                Save
              </Button>
              <Button
                disabled={
                  isStudentFirstNameError ||
                  isStudentMiddleNameError ||
                  isStudentLastNameError ||
                  isStudentDateOfBirthError ||
                  isStudentGenderError ||
                  isStudentCellPhoneNumberError ||
                  isStudentHomePhoneNumberError ||
                  isStudentAddressError ||
                  isStudentAddressCityError ||
                  isStudentAddressPostalCodeError ||
                  isStudentDriversLicenseNumberError ||
                  isStudentDriversLicenseNumberIssuedDateError ||
                  isStudentDriversLicenseNumberExpDateError ||
                  isStudentRegisteredCourseIdError ||
                  isStudentRegisteredProductIdError
                }
                onClick={handleEditStudentEntry}
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

export default NewStudentScreen;
