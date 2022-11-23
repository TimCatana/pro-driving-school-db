import React from "react";
import styled from "styled-components";
import useNewCourseScreen from "./useNewCourseScreen";

const ConfirmButton = styled.button``;
const TextInput = styled.input``;
const DropdownList = styled.select``;
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
    handleInClassInstructorChange,
    isCourseInClassInstructorError,
    handleAddNewCourseEntry,
    handleEditCourseEntry
  } = useNewCourseScreen();

  return (
    <div>
      <h1>NewCourseScreen</h1>
      <TextInput
        type="number"
        min="0"
        value={courseId}
        onChange={handleCourseIdChange}
      ></TextInput>
      {/* add min date field and use script to get todays date */}
      <TextInput
        type="date"
        value={courseStartDate}
        onChange={handleCourseStartDateChange}
      ></TextInput>
      {/* add min date field and use script to get todays date */}
      <TextInput
        type="date"
        value={courseEndDate}
        onChange={handleCourseEndDateChange}
      ></TextInput>
      <DropdownList name="isDigitalList" onChange={handleIsCourseDigitalChange}>
        <ListOption value={true}>Digital</ListOption>
        <ListOption value={false}>In Person</ListOption>
      </DropdownList>
      <TextInput
        type="number"
        min="0"
        value={courseCapacity}
        onChange={handleCourseCapacityChange}
      ></TextInput>
      <TextInput type="text"></TextInput>
      {/* should be a dropdown list of all available instructors*/}
      <ConfirmButton onClick={handleAddNewCourseEntry}> Save </ConfirmButton>
      <ConfirmButton onClick={handleEditCourseEntry}> Modify </ConfirmButton>
    </div>
  );
};

export default NewCourseScreen;
