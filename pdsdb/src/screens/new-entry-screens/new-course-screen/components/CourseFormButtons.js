import React from "react";
import { Button } from "../../../../components";
import { ButtonsDiv } from "../../common/components/styled";

const CourseFormButtons = (props) => {
  const { courseState, courseButtonHandlers } = props;

  return (
    <ButtonsDiv>
      {courseState.uiModifiersObject.isNewEntry && (
        <Button
          disabled={
            courseState.courseObject.isLoading ||
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

      {!courseState.uiModifiersObject.isNewEntry && (
        <>
          {!courseState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={courseState.uiModifiersObject.isLoading}
              onClick={courseButtonHandlers.handleChangeToEditableForm}
            >
              Edit
            </Button>
          )}

          {courseState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={
                courseState.courseObject.isLoading ||
                courseState.courseObject.isCourseIdError ||
                courseState.courseObject.isCourseCapacityError ||
                courseState.courseObject.isCourseStartDateError ||
                courseState.courseObject.isCourseEndDateError ||
                courseState.courseObject.isCourseDigitalError ||
                courseState.courseObject.isCourseInClassInstructorError
              }
              onClick={courseButtonHandlers.handleEditCourseEntry}
            >
              Save Edit
            </Button>
          )}
        </>
      )}

      {!courseState.uiModifiersObject.isNewEntry && !courseState.uiModifiersObject.areFieldsEditable && (
        <Button
          disabled={courseState.uiModifiersObject.isLoading}
          backgroundColor="blue"
          onClick={courseButtonHandlers.handleGetFilledCoursePdf}
        >
          Get Course Enrollment PDF
        </Button>
      )}

      <Button disabled={courseState.uiModifiersObject.isLoading} onClick={courseButtonHandlers.handleGoBack}>
        Go Back
      </Button>
    </ButtonsDiv>
  );
};

export default CourseFormButtons;
