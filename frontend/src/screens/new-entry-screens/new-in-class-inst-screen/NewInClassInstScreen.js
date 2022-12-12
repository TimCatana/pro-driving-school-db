import React from "react";
import { useNewInClassInstructorScreen } from "./hooks";
import { InClassInstructorFormButtons, InClassInstructorFormInputs } from "./components";
import { Title, CustomAlert, LoadingSpinner } from "../../../components";
import { WrapperDiv, ContainerDiv } from "../common/components/styled";

const NewInClassInstScreen = () => {
  const { inClassInstructorState, InClassInstructorChangeHandlers, inClassInstructorButtonHandlers } =
    useNewInClassInstructorScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        {inClassInstructorState.uiModifiersObject.isNewEntry && <Title>Add New In Class Instructor</Title>}

        {!inClassInstructorState.uiModifiersObject.isNewEntry && <Title>Edit In Class Instructor</Title>}

        {inClassInstructorState.uiModifiersObject.isLoading && <LoadingSpinner />}

        {!inClassInstructorState.isLoading && (
          <>
            {inClassInstructorState.messageObject.showMessage && (
              <CustomAlert
                variant={inClassInstructorState.messageObject.messageColor}
                message={inClassInstructorState.messageObject.message}
                handleClose={inClassInstructorButtonHandlers.handleDismissErrorAlert}
              />
            )}

            <InClassInstructorFormInputs
              inClassInstructorState={inClassInstructorState}
              InClassInstructorChangeHandlers={InClassInstructorChangeHandlers}
            />

            <InClassInstructorFormButtons
              inClassInstructorState={inClassInstructorState}
              inClassInstructorButtonHandlers={inClassInstructorButtonHandlers}
            />
          </>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewInClassInstScreen;
