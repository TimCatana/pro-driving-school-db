import React from "react";
import { Title, LoadingSpinner, CustomAlert } from "../../../components";
import { ContainerDiv, WrapperDiv } from "../common/components/styled";
import { CourseFormButtons, CourseFormInputs } from "./components";

import { useNewCourseScreen } from "./hooks";

const NewCourseScreen = () => {
  const { courseState, courseChangeHandlers, courseButtonHandlers } = useNewCourseScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        {courseState.uiModifiersObject.isNewEntry && <Title>Add New Course</Title>}

        {!courseState.uiModifiersObject.isNewEntry && <Title>Edit Course</Title>}

        {courseState.uiModifiersObject.isLoading && <LoadingSpinner />}

        {!courseState.isLoading && (
          <>
            {courseState.messageObject.showMessage && (
              <CustomAlert
                variant={courseState.messageObject.messageColor}
                message={courseState.messageObject.message}
                handleClose={courseButtonHandlers.handleDismissErrorAlert}
              />
            )}

            <CourseFormInputs courseState={courseState} courseChangeHandlers={courseChangeHandlers} />

            <CourseFormButtons courseState={courseState} courseButtonHandlers={courseButtonHandlers} />
          </>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewCourseScreen;
