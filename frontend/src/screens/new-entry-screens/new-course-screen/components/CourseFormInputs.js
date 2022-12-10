import React from "react";
import {
  DropDownMenu,
  ListOption,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
  TextInput,
} from "../../../../components";
import { courseTableHeadings, inClassInstTableHeadings } from "../../../../domain/constants/dbConstants";
import { FormDiv } from "../../common/components/styled";

const CourseFormInputs = (props) => {
  const { courseState, courseChangeHandlers } = props;

  return (
    <FormDiv>
      <SideBySideTextInputsDiv>
        <TextInput
          placeholder={"Course ID"}
          disabled={courseState.uiModifiersObject.isLoading || !courseState.uiModifiersObject.areFieldsEditable}
          value={courseState.courseObject.courseId}
          onChange={courseChangeHandlers.handleCourseIdChange}
          isError={courseState.courseObject.isCourseIdError && courseState.courseObject.courseId.length > 0}
          type="number"
          min="0"
        />

        <TextInput
          placeholder={"Course Capacity"}
          disabled={courseState.uiModifiersObject.isLoading || !courseState.uiModifiersObject.areFieldsEditable}
          value={courseState.courseObject.courseCapacity}
          onChange={courseChangeHandlers.handleCourseCapacityChange}
          isError={courseState.courseObject.isCourseCapacityError && courseState.courseObject.courseCapacity.length > 0}
          type="number"
          min="0"
          isLast
        />
      </SideBySideTextInputsDiv>

      {/*  */}

      <SideBySideTextInputsDiv>
        {/* add min date field and use script to get todays date */}
        <TextInput
          placeholder={"Start Date"}
          disabled={courseState.uiModifiersObject.isLoading || !courseState.uiModifiersObject.areFieldsEditable}
          value={courseState.courseObject.courseStartDate}
          onChange={courseChangeHandlers.handleCourseStartDateChange}
          isError={
            courseState.courseObject.isCourseStartDateError && courseState.courseObject.courseStartDate.length > 0
          }
          onFocus={() => {
            courseChangeHandlers.handleStartDateFocusAndBlurHandler(true);
          }}
          onBlur={() => {
            courseChangeHandlers.handleStartDateFocusAndBlurHandler(false);
          }}
          type={courseState.dateTextInputFocusesObject.isStartDateFocus ? "date" : "text"}
        />
        {/* add min date field and use script to get todays date */}
        <TextInput
          placeholder={"End Date"}
          disabled={courseState.uiModifiersObject.isLoading || !courseState.uiModifiersObject.areFieldsEditable}
          value={courseState.courseObject.courseEndDate}
          onChange={courseChangeHandlers.handleCourseEndDateChange}
          isError={courseState.courseObject.isCourseEndDateError && courseState.courseObject.courseEndDate.length > 0}
          onFocus={() => {
            courseChangeHandlers.handleEndDateFocusAndBlurHandler(true);
          }}
          onBlur={() => {
            courseChangeHandlers.handleEndDateFocusAndBlurHandler(false);
          }}
          type={courseState.dateTextInputFocusesObject.isEndDateFocus ? "date" : "text"}
          isLast
        />
      </SideBySideTextInputsDiv>

      {/*  */}
      <SingleRowTextInputDiv>
        <DropDownMenu
          name="isDigitalList"
          disabled={courseState.uiModifiersObject.isLoading || !courseState.uiModifiersObject.areFieldsEditable}
          value={courseState.courseObject.courseIsDigital}
          onChange={courseChangeHandlers.handleIsCourseDigitalChange}
          isError={
            courseState.courseObject.isCourseIsDigitalError && courseState.courseObject.courseIsDigital != "label"
          }
          isLast
        >
          <ListOption value={"label"} disabled hidden>
            Select Digital/In Person
          </ListOption>
          <ListOption value={courseState.CourseTypes.DIGITAL}>Digital</ListOption>
          <ListOption value={courseState.CourseTypes.IN_PERSON}>In Person</ListOption>
        </DropDownMenu>
      </SingleRowTextInputDiv>

      {/*  */}

      <SingleRowTextInputDiv>
        <DropDownMenu
          name="inClassInstList"
          disabled={courseState.uiModifiersObject.isLoading || !courseState.uiModifiersObject.areFieldsEditable}
          value={courseState.courseObject.courseInClassInstructor}
          onChange={courseChangeHandlers.handleInClassInstructorChange}
          isError={
            courseState.courseObject.isCourseInClassInstructorError &&
            courseState.courseObject.courseInClassInstructor != "label"
          }
          isLast
        >
          <ListOption value={"label"} disables hidden>
            Please Select Instructor
          </ListOption>
          {courseState.dropdownMenuOptionsObject.inClassInstructors.map((data) => (
            <ListOption key={data[inClassInstTableHeadings.id]} value={data[inClassInstTableHeadings.driversLicenseId]}>
              {data[inClassInstTableHeadings.firstName]} {data[inClassInstTableHeadings.lastName]}
            </ListOption>
          ))}
        </DropDownMenu>
      </SingleRowTextInputDiv>
    </FormDiv>
  );
};

export default CourseFormInputs;
