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
    courseInClassInstructor,
    handleInClassInstructorChange,
    isCourseInClassInstructorError,
    handleAddNewCourseEntry,
    handleEditCourseEntry,
    inClassInstructors,
  } = useNewCourseScreen();

  return (
    <div>
      <h1>NewCourseScreen</h1>

      {!isLoading && (
        <>
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
          <DropdownList
            name="isDigitalList"
            defaultValue={0}
            onChange={handleIsCourseDigitalChange}
          >
            <ListOption value={0}>Digital</ListOption>
            <ListOption value={1}>In Person</ListOption>
          </DropdownList>
          <TextInput
            type="number"
            min="0"
            value={courseCapacity}
            onChange={handleCourseCapacityChange}
          ></TextInput>

          <DropdownList
            name="inClassInstList"
            defaultValue={inClassInstructors[0].id}
            onChange={handleInClassInstructorChange}
          >
            {inClassInstructors.map((data) => (
              <ListOption value={data.id}>{data.first_name}</ListOption>
            ))}
          </DropdownList>

          <ConfirmButton onClick={handleAddNewCourseEntry}>
            {" "}
            Save{" "}
          </ConfirmButton>
          <ConfirmButton onClick={handleEditCourseEntry}>
            {" "}
            Modify{" "}
          </ConfirmButton>
        </>
      )}
    </div>
  );
};

export default NewCourseScreen;
