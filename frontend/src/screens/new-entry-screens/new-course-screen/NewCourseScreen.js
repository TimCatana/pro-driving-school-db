import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
} from "../../../components/common";

import useNewCourseScreen from "./useNewCourseScreen";

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
  const {
    isLoading,
    courseId,
    handleCourseIdChange,
    isCourseIdError,
    courseStartDate,
    handleCourseStartDateChange,
    isCourseStartDateError,
    courseEndDate,
    handleCourseEndDateChange,
    isCourseEndDateError,
    handleIsCourseDigitalChange,
    isCourseDigitalError,
    courseCapacity,
    handleCourseCapacityChange,
    isCourseCapacityError,
    courseInClassInstructor,
    handleInClassInstructorChange,
    isCourseInClassInstructorError,
    handleAddNewCourseEntry,
    handleEditCourseEntry,
    inClassInstructors,
    CourseTypes,
  } = useNewCourseScreen();

  const [isStartDateFocus, setIsStartDateFocus] = useState(false);
  const [isEndDateFocus, setIsEndDateFocus] = useState(false);

  const StartDateFocusAndBlurHandler = (isFocused) => {
    setIsStartDateFocus(isFocused);
  };
  const EndDateFocusAndBlurHandler = (isFocused) => {
    setIsEndDateFocus(isFocused);
  };

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewCourseScreen</TitleH1>

        {!isLoading && (
          <FormDiv>
            <SideBySideTextInputsDiv>
              <TextInput
                type="number"
                min="0"
                value={courseId}
                onChange={handleCourseIdChange}
                placeholder={"Course ID"}
              />
              <TextInput
                type="number"
                min="0"
                value={courseCapacity}
                onChange={handleCourseCapacityChange}
                placeholder={"Course Capacity"}
              />
            </SideBySideTextInputsDiv>

            <SideBySideTextInputsDiv>
              {/* add min date field and use script to get todays date */}
              <TextInput
                type={isStartDateFocus ? "date" : "text"}
                onFocus={() => {
                  StartDateFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  StartDateFocusAndBlurHandler(false);
                }}
                value={courseStartDate}
                onChange={handleCourseStartDateChange}
                placeholder={"Start Date"}
              />
              {/* add min date field and use script to get todays date */}
              <TextInput
                type={isEndDateFocus ? "date" : "text"}
                onFocus={() => {
                  EndDateFocusAndBlurHandler(true);
                }}
                onBlur={() => {
                  EndDateFocusAndBlurHandler(false);
                }}
                value={courseEndDate}
                onChange={handleCourseEndDateChange}
                placeholder={"End Date"}
              />
            </SideBySideTextInputsDiv>

            <SingleRowTextInputDiv>
              <DropDownMenu
                name="isDigitalList"
                defaultValue={"label"}
                onChange={handleIsCourseDigitalChange}
              >
                <ListOption value={"label"} disabled hidden>
                  Please Select Digital/In Person
                </ListOption>
                <ListOption value={CourseTypes.DIGITAL}>Digital</ListOption>
                <ListOption value={CourseTypes.IN_PERSON}>In Person</ListOption>
              </DropDownMenu>
            </SingleRowTextInputDiv>

            <SingleRowTextInputDiv>
              <DropDownMenu
                name="inClassInstList"
                defaultValue={"label"}
                onChange={handleInClassInstructorChange}
              >
                <ListOption value={"label"} disables hidden>
                  Please Select Instructor
                </ListOption>
                {inClassInstructors.map((data) => (
                  <ListOption key={data.id} value={data.id}>
                    {data.first_name}
                  </ListOption>
                ))}
              </DropDownMenu>
            </SingleRowTextInputDiv>
          </FormDiv>
        )}

        <ButtonsDiv>
          <Button
            disabled={
              isCourseIdError ||
              isCourseCapacityError ||
              isCourseStartDateError ||
              isCourseEndDateError ||
              isCourseDigitalError ||
              isCourseInClassInstructorError
            }
            onClick={handleAddNewCourseEntry}
          >
            Save
          </Button>
          <Button
            disabled={
              isCourseIdError ||
              isCourseCapacityError ||
              isCourseStartDateError ||
              isCourseEndDateError ||
              isCourseDigitalError ||
              isCourseInClassInstructorError
            }
            onClick={handleEditCourseEntry}
          >
            Modify
          </Button>
        </ButtonsDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewCourseScreen;
