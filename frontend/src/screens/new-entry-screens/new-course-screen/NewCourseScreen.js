import React from "react";
import styled from "styled-components";
import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
  Title,
  ListOption,
} from "../../../components";
import {
  ContainerDiv,
  FormDiv,
  WrapperDiv,
  ButtonsDiv,
} from "../common/components/styled";

import { useNewCourseScreen } from "./hooks";

const NewCourseScreen = () => {
  const { courseState, courseChangeHandlers, courseButtonHandlers } =
    useNewCourseScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <Title>NewCourseScreen</Title>

        {!courseState.isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="number"
                min="0"
                value={courseState.courseObject.courseId}
                onChange={courseChangeHandlers.handleCourseIdChange}
                placeholder={"Course ID"}
              />

              <TextInput
                isLast
                type="number"
                min="0"
                value={courseState.courseObject.courseCapacity}
                onChange={courseChangeHandlers.handleCourseCapacityChange}
                placeholder={"Course Capacity"}
              />
            </SideBySideTextInputsDiv>

            {/*  */}

            <SideBySideTextInputsDiv>
              {/* add min date field and use script to get todays date */}
              <TextInput
                type={courseState.isStartDateFocus ? "date" : "text"}
                onFocus={() => {
                  courseChangeHandlers.handleStartDateFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  courseChangeHandlers.handleStartDateFocusAndBlurHandler(
                    false
                  );
                }}
                value={courseState.courseObject.courseStartDate}
                onChange={courseChangeHandlers.handleCourseStartDateChange}
                placeholder={"Start Date"}
              />
              {/* add min date field and use script to get todays date */}
              <TextInput
                isLast
                type={courseState.isEndDateFocus ? "date" : "text"}
                onFocus={() => {
                  courseChangeHandlers.handleEndDateFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  courseChangeHandlers.handleEndDateFocusAndBlurHandler(false);
                }}
                value={courseState.courseObject.courseEndDate}
                onChange={courseChangeHandlers.handleCourseEndDateChange}
                placeholder={"End Date"}
              />
            </SideBySideTextInputsDiv>

            {/*  */}

            <SingleRowTextInputDiv>
              <DropDownMenu
                isLast
                name="isDigitalList"
                defaultValue={courseState.selectedCourseType}
                onChange={courseChangeHandlers.handleIsCourseDigitalChange}
              >
                <ListOption value={"label"} disabled hidden>
                  Please Select Digital/In Person
                </ListOption>
                <ListOption value={courseState.CourseTypes.DIGITAL}>
                  Digital
                </ListOption>
                <ListOption value={courseState.CourseTypes.IN_PERSON}>
                  In Person
                </ListOption>
              </DropDownMenu>
            </SingleRowTextInputDiv>

            {/*  */}

            <SingleRowTextInputDiv>
              <DropDownMenu
                isLast
                name="inClassInstList"
                defaultValue={courseState.selectedInstructor}
                onChange={courseChangeHandlers.handleInClassInstructorChange}
              >
                <ListOption value={"label"} disables hidden>
                  Please Select Instructor
                </ListOption>
                {courseState.inClassInstructors.map((data) => (
                  <ListOption key={data.id} value={data.id}>
                    {data.first_name}
                  </ListOption>
                ))}
              </DropDownMenu>
            </SingleRowTextInputDiv>
          </FormDiv>
        )}

        <ButtonsDiv>
          {courseState.isNewEntry && (
            <Button
              disabled={
                courseState.courseObject.isCourseIdError ||
                courseState.courseObject.isCourseCapacityError ||
                courseState.courseObject.isCourseStartDateError ||
                courseState.courseObject.isCourseEndDateError ||
                courseState.courseObject.isCourseDigitalError ||
                courseState.courseObject.isCourseInClassInstructorError
              }
              onClick={courseButtonHandlers.handleAddNewCourseEntry}
            >
              Save
            </Button>
          )}

          {!courseState.isNewEntry && (
            <Button
              disabled={
                courseState.courseObject.isCourseIdError ||
                courseState.courseObject.isCourseCapacityError ||
                courseState.courseObject.isCourseStartDateError ||
                courseState.courseObject.isCourseEndDateError ||
                courseState.courseObject.isCourseDigitalError ||
                courseState.courseObject.isCourseInClassInstructorError
              }
              onClick={courseButtonHandlers.handleEditCourseEntry}
            >
              Modify
            </Button>
          )}

          {!courseState.isNewEntry && (
            <Button onClick={courseButtonHandlers.handleGetFilledCoursePdf}>
              Get PDF
            </Button>
          )}

          <Button onClick={() => courseState.navigation("/")}>Go Back</Button>
        </ButtonsDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewCourseScreen;
