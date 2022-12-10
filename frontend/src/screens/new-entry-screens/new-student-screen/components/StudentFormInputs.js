import React from "react";
import {
  DropDownMenu,
  ListOption,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
  TextInput,
} from "../../../../components";
import {
  courseTableHeadings,
  inClassInstTableHeadings,
  productTableHeadings,
} from "../../../../domain/constants/dbConstants";
import { FormDiv } from "../../common/components/styled";

const StudentFormInputs = (props) => {
  const { studentState, studentChangeHandlers } = props;

  return (
    <FormDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"First Name"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentFirstName}
          onChange={studentChangeHandlers.handleStudentFirstNameChange}
          isError={
            studentState.studentObject.isStudentFirstNameError && studentState.studentObject.studentFirstName.length > 0
          }
          type="text"
          maxLength={70}
        />

        <TextInput
          placeholder={"Middle Name (Optional)"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentMiddleName}
          onChange={studentChangeHandlers.handleStudentMiddleNameChange}
          isError={
            studentState.studentObject.isStudentMiddleNameError &&
            studentState.studentObject.studentMiddleName.length > 0
          }
          type="text"
          maxLength={70}
        />

        <TextInput
          placeholder={"Last Name"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentLastName}
          onChange={studentChangeHandlers.handleStudentLastNameChange}
          isError={
            studentState.studentObject.isStudentLastNameError && studentState.studentObject.studentLastName.length > 0
          }
          type="text"
          maxLength={70}
          isLast
        />
      </SideBySideTextInputsDiv>

      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"Date Of Birth"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentDateOfBirth}
          onChange={studentChangeHandlers.handleStudentDateOfBirthChange}
          isError={
            studentState.studentObject.isStudentDateOfBirthError &&
            studentState.studentObject.studentDateOfBirth.length > 0
          }
          type={studentState.dateTextInputFocusesObject.isDateOfBirthFocus ? "date" : "text"}
          onFocus={() => {
            studentChangeHandlers.handleStudentDateOfBirthFocusAndBlurHandler(true);
          }}
          onBlur={() => {
            studentChangeHandlers.handleStudentDateOfBirthFocusAndBlurHandler(false);
          }}
        />

        <TextInput
          placeholder={"Height (cm) (Optional)"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentHeight}
          onChange={studentChangeHandlers.handleStudentHeightChange}
          isError={
            studentState.studentObject.isStudentHeightError && studentState.studentObject.studentHeight.length > 0
          }
          type="number"
          min="0"
          maxLength={15}
        />

        <DropDownMenu
          name="genderList"
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentGender}
          onChange={studentChangeHandlers.handleStudentGenderChange}
          isError={
            studentState.studentObject.isStudentGenderError && studentState.studentObject.studentGender != "label"
          }
          isLast
        >
          <ListOption value={"label"} disabled hidden>
            Please Select Gender
          </ListOption>
          <ListOption value={studentState.Genders.MALE}>Male</ListOption>
          <ListOption value={studentState.Genders.FEMALE}>Female</ListOption>
          <ListOption value={studentState.Genders.NOT_DECLARED}>Not Declared</ListOption>
        </DropDownMenu>
      </SideBySideTextInputsDiv>

      <SideBySideTextInputsDiv>
        <TextInput
          placeholder="Cell Phone (Format: 5194567890)"
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentCellPhoneNumber}
          onChange={studentChangeHandlers.handleStudentCellPhoneNumberChange}
          isError={
            studentState.studentObject.isStudentCellPhoneNumberError &&
            studentState.studentObject.studentCellPhoneNumber.length > 0
          }
          type="text"
          maxLength={18}
        />
        <TextInput
          placeholder="Home Phone (Format: 5194567890)"
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentHomePhoneNumber}
          onChange={studentChangeHandlers.handleStudentHomePhoneNumberChange}
          isError={
            studentState.studentObject.isStudentHomePhoneNumberError &&
            studentState.studentObject.studentHomePhoneNumber.length > 0
          }
          type="text"
          maxLength={18}
          isLast
        />
      </SideBySideTextInputsDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"Address (Ex. 123 main st)"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentAddress}
          onChange={studentChangeHandlers.handleStudentAddressChange}
          isError={
            studentState.studentObject.isStudentAddressError && studentState.studentObject.studentAddress.length > 0
          }
          type="text"
          maxLength={145}
        />
        <TextInput
          placeholder={"Apt. Num (Optional)"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentAddressApartmentNumber}
          onChange={studentChangeHandlers.handleStudentAddressApartmentNumberChange}
          isError={
            studentState.studentObject.isStudentAddressApartmentNumberError &&
            studentState.studentObject.studentAddressApartmentNumber.length > 0
          }
          type="number"
          min="0"
          maxLength={15}
          isLast
        />
      </SideBySideTextInputsDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"City"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentAddressCity}
          onChange={studentChangeHandlers.handleStudentAddressCityChange}
          isError={
            studentState.studentObject.isStudentAddressCityError &&
            studentState.studentObject.studentAddressCity.length > 0
          }
          type="text"
          maxLength={145}
        />
        <TextInput
          placeholder={"Postal Code"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentAddressPostalCode}
          onChange={studentChangeHandlers.handleStudentAddressPostalCodeChange}
          isError={
            studentState.studentObject.isStudentAddressPostalCodeError &&
            studentState.studentObject.studentAddressPostalCode.length > 0
          }
          type="text"
          maxLength={18}
          isLast
        />
      </SideBySideTextInputsDiv>

      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"Driver's License Number"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentDriversLicenseId}
          onChange={studentChangeHandlers.handleStudentDriversLicenseIdChange}
          isError={
            studentState.studentObject.isStudentDriversLicenseIdError &&
            studentState.studentObject.studentDriversLicenseId.length > 0
          }
          type="text"
        />
        <DropDownMenu
          name="licenseClassList"
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentDriversLicenseClass}
          onChange={studentChangeHandlers.handleStudentDriversLicenseClassChange}
          isError={
            studentState.studentObject.isStudentDriversLicenseClassError &&
            studentState.studentObject.studentDriversLicenseClass != "label"
          }
          isLast
        >
          <ListOption value={"label"} disabled hidden>
            Please Select License Class
          </ListOption>
          <ListOption value={studentState.LicenseClasses.G1}>G1</ListOption>
          <ListOption value={studentState.LicenseClasses.G2}>G2</ListOption>
          <ListOption value={studentState.LicenseClasses.G}>G</ListOption>
          <ListOption value={studentState.LicenseClasses.M1}>M1</ListOption>
          <ListOption value={studentState.LicenseClasses.M2}>M2</ListOption>
        </DropDownMenu>
      </SideBySideTextInputsDiv>

      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"Driver's License Issued Date"}
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentDriversLicenseIssuedDate}
          onChange={studentChangeHandlers.handleStudentDriversLicenseIssuedDateChange}
          isError={
            studentState.studentObject.isStudentDriversLicenseIssuedDateError &&
            studentState.studentObject.studentDriversLicenseIssuedDate.length > 0
          }
          onFocus={() => {
            studentChangeHandlers.handleStudentDriversLicenseIssuedDateFocusAndBlurHandler(true);
          }}
          onBlur={() => {
            studentChangeHandlers.handleStudentDriversLicenseIssuedDateFocusAndBlurHandler(false);
          }}
          type={studentState.dateTextInputFocusesObject.isStudentDriversLicenseIssuedDateFocus ? "date" : "text"}
        />
        <TextInput
          placeholder={"Driver's License Expiry Date"}
          disabled
          value={studentState.studentObject.studentDriversLicenseExpDate}
          onChange={studentChangeHandlers.handleStudentDriversLicenseExpDateChange}
          isError={
            studentState.studentObject.isStudentDriversLicenseExpDateError &&
            studentState.studentObject.studentDriversLicenseExpDate.length > 0
          }
          isLast
          type="text"
        />
      </SideBySideTextInputsDiv>

      <SingleRowTextInputDiv>
        <DropDownMenu
          name="courseIdList"
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          value={studentState.studentObject.studentRegisteredCourseId}
          onChange={studentChangeHandlers.handleStudentRegisteredCourseId}
          isError={
            studentState.studentObject.isStudentRegisteredCourseIdError &&
            studentState.studentObject.studentRegisteredCourseId != "label"
          }
          isLast
        >
          <ListOption value={"label"} disabled hidden>
            Which Course (ID) Is The Student Registered In?
          </ListOption>
          {studentState.dropdownMenuOptionsObject.courses.map((data) => (
            <ListOption key={data[courseTableHeadings.id]} value={data[courseTableHeadings.courseId]}>
              {data[courseTableHeadings.courseId]}
            </ListOption>
          ))}
        </DropDownMenu>
      </SingleRowTextInputDiv>

      <SingleRowTextInputDiv>
        <DropDownMenu
          disabled={studentState.uiModifiersObject.isLoading || !studentState.uiModifiersObject.areFieldsEditable}
          name="productIdList"
          value={studentState.studentObject.studentPurchasedProductId}
          onChange={studentChangeHandlers.handleStudentPurchasedProductId}
          isError={
            studentState.studentObject.isStudentPurchasedProductIdError &&
            studentState.studentObject.studentPurchasedProductId != "label"
          }
          isLast
        >
          <ListOption value={"label"} disabled hidden>
            Which Product (ID) Did The Student Purchase?
          </ListOption>
          {studentState.dropdownMenuOptionsObject.products.map((data) => (
            <ListOption key={data[productTableHeadings.id]} value={data[productTableHeadings.productId]}>
              {data[productTableHeadings.productId]}
            </ListOption>
          ))}
        </DropDownMenu>
      </SingleRowTextInputDiv>
    </FormDiv>
  );
};

export default StudentFormInputs;
