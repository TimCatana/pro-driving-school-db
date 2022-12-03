import React from "react";
import styled from "styled-components";
import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
} from "../../../components";

import { useNewCourseScreen } from "./hooks";

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

const NewCourseScreen = () => {
  const { courseState, courseChangeHandlers, courseButtonHandlers } =
    useNewCourseScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewCourseScreen</TitleH1>

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
          <Button onClick={() => courseState.navigation("/")}>Go Back</Button>
        </ButtonsDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewCourseScreen;
