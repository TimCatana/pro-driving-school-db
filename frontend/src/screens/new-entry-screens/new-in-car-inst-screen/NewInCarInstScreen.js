import React, { useState } from "react";
import styled from "styled-components";
import { useNewInCarInstructorScreen } from "./hooks";
import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
  Title,
  CustomAlert,
} from "../../../components";
import { WrapperDiv, ContainerDiv, FormDiv, ButtonsDiv } from "../common/components/styled";
import { InCarInstructorFormButtons, InCarInstructorFormInputs } from "./components";

const NewInCarInstScreen = () => {
  const { inCarInstructorState, inCarInstructorChangeHandlers, inCarInstructorButtonHandlers } =
    useNewInCarInstructorScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <Title>NewInCarInstScreen</Title>

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
