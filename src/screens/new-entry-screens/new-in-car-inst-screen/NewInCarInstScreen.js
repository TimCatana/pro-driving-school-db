import React from "react";
import { useNewInCarInstructorScreen } from "./hooks";
import { Title, CustomAlert, LoadingSpinner } from "../../../components";
import { WrapperDiv, ContainerDiv } from "../common/components/styled";
import { InCarInstructorFormButtons, InCarInstructorFormInputs } from "./components";

const NewInCarInstScreen = () => {
  const { inCarInstructorState, inCarInstructorChangeHandlers, inCarInstructorButtonHandlers } =
    useNewInCarInstructorScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        {inCarInstructorState.uiModifiersObject.isNewEntry && <Title>Add New In Car Instructor</Title>}

        {!inCarInstructorState.uiModifiersObject.isNewEntry && <Title>Edit In Car Instructor</Title>}

        {inCarInstructorState.uiModifiersObject.isLoading && <LoadingSpinner />}

        {!inCarInstructorState.isLoading && (
          <>
            {inCarInstructorState.messageObject.showMessage && (
              <CustomAlert
                variant={inCarInstructorState.messageObject.messageColor}
                message={inCarInstructorState.messageObject.message}
                handleClose={inCarInstructorButtonHandlers.handleDismissErrorAlert}
              />
            )}

            <InCarInstructorFormInputs
              inCarInstructorState={inCarInstructorState}
              inCarInstructorChangeHandlers={inCarInstructorChangeHandlers}
            />

            <InCarInstructorFormButtons
              inCarInstructorState={inCarInstructorState}
              inCarInstructorButtonHandlers={inCarInstructorButtonHandlers}
            />
          </>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewInCarInstScreen;
