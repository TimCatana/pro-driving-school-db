import React from "react";
import styled from "styled-components";
import { useNewStudentScreen } from "./hooks";

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

const ListOption = styled.option``;

const NewStudentScreen = () => {
  const { studentState, studentChangeHandlers, studentButtonHandlers } =
    useNewStudentScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewStudentScreen</TitleH1>

        {!studentState.isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={70}
                value={studentState.studentObject.studentFirstName}
                onChange={studentChangeHandlers.handleStudentFirstNameChange}
                placeholder={"First Name"}
              />
              <TextInput
                type="text"
                maxLength={70}
                value={studentState.studentObject.studentMiddleName}
                onChange={studentChangeHandlers.handleStudentMiddleNameChange}
                placeholder={"Middle Name (Optional)"}
              />
              <TextInput
                type="text"
                maxLength={70}
                value={studentState.studentObject.studentLastName}
                onChange={studentChangeHandlers.handleStudentLastNameChange}
                placeholder={"Last Name"}
              />
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                type={studentState.isDateOfBirthFocus ? "date" : "text"}
                onFocus={() => {
                  studentChangeHandlers.handleStudentDateOfBirthFocusAndBlurHandler(
                    true
                  );
                }}
                onBlur={() => {
                  studentChangeHandlers.handleStudentDateOfBirthFocusAndBlurHandler(
                    false
                  );
                }}
                value={studentState.studentObject.studentDateOfBirth}
                onChange={studentChangeHandlers.handleStudentDateOfBirthChange}
                placeholder={"Date Of Birth"}
              />

              <DropDownMenu
                name="genderList"
                defaultValue={studentState.selectedGender}
                onChange={studentChangeHandlers.handleStudentGenderChange}
              >
                <ListOption value={"label"} disabled hidden>
                  Please Select Gender
                </ListOption>
                <ListOption value={studentState.Genders.MALE}>Male</ListOption>
                <ListOption value={studentState.Genders.FEMALE}>
                  Female
                </ListOption>
                <ListOption value={studentState.Genders.NOT_DECLARED}>
                  Not Declared
                </ListOption>
              </DropDownMenu>
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={18}
                placeholder="Cell Phone (Format: 5194567890)"
                value={studentState.studentObject.studentCellPhoneNumber}
                onChange={
                  studentChangeHandlers.handleStudentCellPhoneNumberChange
                }
              />
              <TextInput
                type="text"
                maxLength={18}
                placeholder="Home Phone (Format: 5194567890)"
                value={studentState.studentObject.studentHomePhoneNumber}
                onChange={
                  studentChangeHandlers.handleStudentHomePhoneNumberChange
                }
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                maxLength={145}
                value={studentState.studentObject.studentAddress}
                onChange={studentChangeHandlers.handleStudentAddressChange}
                placeholder={"Address (Ex. 123 main st)"}
              />
              <TextInput
                type="text"
                maxLength={145}
                value={studentState.studentObject.studentAddressCity}
                onChange={studentChangeHandlers.handleStudentAddressCityChange}
                placeholder={"City"}
              />
              <TextInput
                type="text"
                maxLength={18}
                value={studentState.studentObject.studentAddressPostalCode}
                onChange={
                  studentChangeHandlers.handleStudentAddressPostalCodeChange
                }
                placeholder={"Postal Code"}
              />
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                type="text"
                value={studentState.studentObject.studentDriversLicenseNumber}
                onChange={
                  studentChangeHandlers.handleStudentDriversLicenseNumberChange
                }
                placeholder={"Driver's License Number"}
              />

              {/* add min date field and use script to get todays date */}
              <TextInput
                type={
                  studentState.isStudentDriversLicenseIssuedDateFocus
                    ? "date"
                    : "text"
                }
                onFocus={() => {
                  studentChangeHandlers.handleStudentDriversLicenseIssuedDateFocusAndBlurHandler(
                    true
                  );
                }}
                onBlur={() => {
                  studentChangeHandlers.handleStudentDriversLicenseIssuedDateFocusAndBlurHandler(
                    false
                  );
                }}
                value={
                  studentState.studentObject
                    .studentDriversLicenseNumberIssuedDate
                }
                onChange={
                  studentChangeHandlers.handleStudentDriversLicenseNumberIssuedDateChange
                }
                placeholder={"Driver's License Issued Date"}
              />

              {/* should be auto populated as 5 years after the */}
              <TextInput
                type="text"
                disabled
                value={
                  studentState.studentObject.studentDriversLicenseNumberExpDate
                }
                onChange={
                  studentChangeHandlers.handleStudentDriversLicenseNumberExpDateChange
                }
                placeholder={"Driver's License Expiry Date"}
              />
            </SideBySideTextInputsDiv>

            <SingleRowTextInputDiv>
              {/* get the courses from database and but them in the options */}
              <DropDownMenu
                name="courseIdList"
                defaultValue={studentState.selectedRegisteredCourse}
                onChange={studentChangeHandlers.handleStudentRegisteredCourseId}
              >
                <ListOption value={"label"} disabled hidden>
                  Which Course Is The Student Registered?
                </ListOption>
                {studentState.courses.map((data) => (
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
                defaultValue={studentState.selectedRegisteredProduct}
                onChange={
                  studentChangeHandlers.handleStudentRegisteredProductId
                }
              >
                <ListOption value={"label"} disabled hidden>
                  Which Product Is The Student Registered?
                </ListOption>
                {studentState.products.map((data) => (
                  <ListOption key={data.id} value={data.id}>
                    {data.productId}
                  </ListOption>
                ))}
              </DropDownMenu>
            </SingleRowTextInputDiv>

            {/* should be a dropdown list of all available instructors*/}
            <ButtonsDiv>
              {studentState.isNewEntry && (
                <Button
                  disabled={
                    studentState.studentObject.isStudentFirstNameError ||
                    studentState.studentObject.isStudentMiddleNameError ||
                    studentState.studentObject.isStudentLastNameError ||
                    studentState.studentObject.isStudentDateOfBirthError ||
                    studentState.studentObject.isStudentGenderError ||
                    studentState.studentObject.isStudentCellPhoneNumberError ||
                    studentState.studentObject.isStudentHomePhoneNumberError ||
                    studentState.studentObject.isStudentAddressError ||
                    studentState.studentObject.isStudentAddressCityError ||
                    studentState.studentObject
                      .isStudentAddressPostalCodeError ||
                    studentState.studentObject
                      .isStudentDriversLicenseNumberError ||
                    studentState.studentObject
                      .isStudentDriversLicenseNumberIssuedDateError ||
                    studentState.studentObject
                      .isStudentDriversLicenseNumberExpDateError ||
                    studentState.studentObject
                      .isStudentRegisteredCourseIdError ||
                    studentState.studentObject.isStudentRegisteredProductIdError
                  }
                  onClick={studentButtonHandlers.handleAddNewStudentEntry}
                >
                  Save
                </Button>
              )}

              {!studentState.isNewEntry && (
                <Button
                  disabled={
                    studentState.studentObject.isStudentFirstNameError ||
                    studentState.studentObject.isStudentMiddleNameError ||
                    studentState.studentObject.isStudentLastNameError ||
                    studentState.studentObject.isStudentDateOfBirthError ||
                    studentState.studentObject.isStudentGenderError ||
                    studentState.studentObject.isStudentCellPhoneNumberError ||
                    studentState.studentObject.isStudentHomePhoneNumberError ||
                    studentState.studentObject.isStudentAddressError ||
                    studentState.studentObject.isStudentAddressCityError ||
                    studentState.studentObject
                      .isStudentAddressPostalCodeError ||
                    studentState.studentObject
                      .isStudentDriversLicenseNumberError ||
                    studentState.studentObject
                      .isStudentDriversLicenseNumberIssuedDateError ||
                    studentState.studentObject
                      .isStudentDriversLicenseNumberExpDateError ||
                    studentState.studentObject
                      .isStudentRegisteredCourseIdError ||
                    studentState.studentObject.isStudentRegisteredProductIdError
                  }
                  onClick={studentButtonHandlers.handleEditStudentEntry}
                >
                  Modify
                </Button>
              )}
              <Button onClick={studentButtonHandlers.handleGetFilledStudentPdf}>
                Get PDF
              </Button>
              <Button onClick={() => studentState.navigation("/")}>
                Go Back
              </Button>
            </ButtonsDiv>
          </FormDiv>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewStudentScreen;
