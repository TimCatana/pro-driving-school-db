import React from "react";
import { useNewStudentScreen } from "./hooks";

import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
  ListOption,
  Title,
} from "../../../components";
import {
  WrapperDiv,
  ContainerDiv,
  FormDiv,
  ButtonsDiv,
} from "../common/components/styled";
import {
  courseTableHeadings,
  productTableHeadings,
} from "../../../domain/constants/dbConstants";

const NewStudentScreen = () => {
  const { studentState, studentChangeHandlers, studentButtonHandlers } =
    useNewStudentScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <Title>NewStudentScreen</Title>

        {!studentState.isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                isError={
                  studentState.studentObject.isStudentFirstNameError &&
                  studentState.studentObject.studentFirstName.length > 0
                }
                type="text"
                maxLength={70}
                value={studentState.studentObject.studentFirstName}
                onChange={studentChangeHandlers.handleStudentFirstNameChange}
                placeholder={"First Name"}
              />
              <TextInput
                isError={
                  studentState.studentObject.isStudentMiddleNameError &&
                  studentState.studentObject.studentMiddleName.length > 0
                }
                type="text"
                maxLength={70}
                value={studentState.studentObject.studentMiddleName}
                onChange={studentChangeHandlers.handleStudentMiddleNameChange}
                placeholder={"Middle Name (Optional)"}
              />
              <TextInput
                isError={
                  studentState.studentObject.isStudentLastNameError &&
                  studentState.studentObject.studentLastName.length > 0
                }
                isLast
                type="text"
                maxLength={70}
                value={studentState.studentObject.studentLastName}
                onChange={studentChangeHandlers.handleStudentLastNameChange}
                placeholder={"Last Name"}
              />
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                isError={
                  studentState.studentObject.isStudentDateOfBirthError &&
                  studentState.studentObject.studentDateOfBirth.length > 0
                }
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

              <TextInput
                isError={
                  studentState.studentObject.isStudentHeightError &&
                  studentState.studentObject.studentHeight.length > 0
                }
                type="number"
                min="0"
                maxLength={15}
                value={studentState.studentObject.studentHeight}
                onChange={studentChangeHandlers.handleStudentHeightChange}
                placeholder={"Height (cm) (Optional)"}
              />

              <DropDownMenu
                isError={
                  studentState.studentObject.isStudentGenderError &&
                  studentState.studentObject.studentGender.length > 0
                }
                isLast
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
                isError={
                  studentState.studentObject.isStudentCellPhoneNumberError &&
                  studentState.studentObject.studentCellPhoneNumber.length > 0
                }
                type="text"
                maxLength={18}
                placeholder="Cell Phone (Format: 5194567890)"
                value={studentState.studentObject.studentCellPhoneNumber}
                onChange={
                  studentChangeHandlers.handleStudentCellPhoneNumberChange
                }
              />
              <TextInput
                isError={
                  studentState.studentObject.isStudentHomePhoneNumberError &&
                  studentState.studentObject.studentHomePhoneNumber.length > 0
                }
                isLast
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
                isError={
                  studentState.studentObject.isStudentAddressError &&
                  studentState.studentObject.studentAddress.length > 0
                }
                type="text"
                maxLength={145}
                value={studentState.studentObject.studentAddress}
                onChange={studentChangeHandlers.handleStudentAddressChange}
                placeholder={"Address (Ex. 123 main st)"}
              />
              <TextInput
                isError={
                  studentState.studentObject
                    .isStudentAddressApartmentNumberError &&
                  studentState.studentObject.studentAddressApartmentNumber
                    .length > 0
                }
                isLast
                type="number"
                min="0"
                maxLength={15}
                value={studentState.studentObject.studentAddressApartmentNumber}
                onChange={
                  studentChangeHandlers.handleStudentAddressApartmentNumberChange
                }
                placeholder={"Apt. Num (Optional)"}
              />
            </SideBySideTextInputsDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                isError={
                  studentState.studentObject.isStudentAddressCityError &&
                  studentState.studentObject.studentAddressCity.length > 0
                }
                type="text"
                maxLength={145}
                value={studentState.studentObject.studentAddressCity}
                onChange={studentChangeHandlers.handleStudentAddressCityChange}
                placeholder={"City"}
              />
              <TextInput
                isError={
                  studentState.studentObject.isStudentAddressPostalCodeError &&
                  studentState.studentObject.studentAddressPostalCode.length > 0
                }
                isLast
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
                isError={
                  studentState.studentObject
                    .isStudentDriversLicenseNumberError &&
                  studentState.studentObject.studentDriversLicenseNumber
                    .length > 0
                }
                type="text"
                value={studentState.studentObject.studentDriversLicenseNumber}
                onChange={
                  studentChangeHandlers.handleStudentDriversLicenseNumberChange
                }
                placeholder={"Driver's License Number"}
              />
              <DropDownMenu
                isError={
                  studentState.studentObject
                    .isStudentDriversLicenseClassError &&
                  studentState.studentObject.studentDriversLicenseClass.length >
                    0
                }
                isLast
                name="genderList"
                defaultValue={studentState.selectedLicenseClass}
                onChange={
                  studentChangeHandlers.handleStudentDriversLicenseClassChange
                }
              >
                <ListOption value={"label"} disabled hidden>
                  Please Select License Class
                </ListOption>
                <ListOption value={studentState.LicenseClasses.G1}>
                  G1
                </ListOption>
                <ListOption value={studentState.LicenseClasses.G2}>
                  G2
                </ListOption>
                <ListOption value={studentState.LicenseClasses.G}>G</ListOption>
                <ListOption value={studentState.LicenseClasses.M1}>
                  M1
                </ListOption>
                <ListOption value={studentState.LicenseClasses.M2}>
                  M2
                </ListOption>
              </DropDownMenu>
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              <TextInput
                isError={
                  studentState.studentObject
                    .isStudentDriversLicenseNumberIssuedDateError &&
                  studentState.studentObject
                    .studentDriversLicenseNumberIssuedDate.length > 0
                }
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

              <TextInput
                isError={
                  studentState.studentObject
                    .isStudentDriversLicenseNumberExpDateError &&
                  studentState.studentObject.studentDriversLicenseNumberExpDate
                    .length > 0
                }
                isLast
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
                isError={
                  studentState.studentObject.isStudentRegisteredCourseIdError &&
                  studentState.studentObject.studentRegisteredCourseId.length >
                    0
                }
                isLast
                name="courseIdList"
                defaultValue={studentState.selectedRegisteredCourse}
                onChange={studentChangeHandlers.handleStudentRegisteredCourseId}
              >
                <ListOption value={"label"} disabled hidden>
                  Which Course Is The Student Registered?
                </ListOption>
                {studentState.courses.map((data) => (
                  <ListOption
                    key={data[courseTableHeadings.id]}
                    value={data[courseTableHeadings.courseId]}
                  >
                    {data[courseTableHeadings.courseId]}
                  </ListOption>
                ))}
              </DropDownMenu>
            </SingleRowTextInputDiv>

            <SingleRowTextInputDiv>
              {/* get the products from database and but them in the options */}
              <DropDownMenu
                isError={
                  studentState.studentObject
                    .isStudentRegisteredProductIdError &&
                  studentState.studentObject.studentRegisteredProductId.length >
                    0
                }
                isLast
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
                  <ListOption
                    key={data[productTableHeadings.id]}
                    value={data[productTableHeadings.productId]}
                  >
                    {data[productTableHeadings.productId]}
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

              {!studentState.isNewEntry && (
                <>
                  <Button
                    backgroundColor="blue"
                    onClick={
                      studentButtonHandlers.handleGetFilledStudentApplicationFormPdf
                    }
                  >
                    Get Student Application PDF
                  </Button>
                  <Button
                    backgroundColor="blue"
                    onClick={
                      studentButtonHandlers.handleGetFilledStudentInCarEvaluationPdf
                    }
                  >
                    Get Student In Car Evaluation PDF
                  </Button>
                  <Button
                    backgroundColor="blue"
                    onClick={
                      studentButtonHandlers.handleGetFilledStudentInCarRecordPdf
                    }
                  >
                    Get Student In Car Record PDF
                  </Button>
                  <Button
                    backgroundColor="blue"
                    onClick={
                      studentButtonHandlers.handleGetFilledStudentInvoicePdfUC
                    }
                  >
                    Get Student Invoice PDF
                  </Button>
                  <Button
                    backgroundColor="blue"
                    onClick={
                      studentButtonHandlers.handleGetFilledStudentRecordPdf
                    }
                  >
                    Get Student Record PDF
                  </Button>
                </>
              )}
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
