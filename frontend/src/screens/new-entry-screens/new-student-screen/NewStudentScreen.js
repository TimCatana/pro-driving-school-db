import React from "react";
import { useNewStudentScreen } from "./hooks";

import {
  Button,
  DropDownMenu,
  TextInput,
  SideBySideTextInputsDiv,
  SingleRowTextInputDiv,
  ListOption,
  Title,
  LoadingSpinner,
  CustomAlert,
} from "../../../components";
import { WrapperDiv, ContainerDiv, FormDiv, ButtonsDiv } from "../common/components/styled";
import { courseTableHeadings, productTableHeadings } from "../../../domain/constants/dbConstants";
import { StudentFormButtons, StudentFormInputs } from "./components";

const NewStudentScreen = () => {
  const { studentState, studentChangeHandlers, studentButtonHandlers } = useNewStudentScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        {studentState.uiModifiersObject.isNewEntry && <Title>Add New Student</Title>}

        {!studentState.uiModifiersObject.isNewEntry && <Title>Edit Student</Title>}

        {studentState.uiModifiersObject.isLoading && <LoadingSpinner />}

        {!studentState.isLoading && (
          <>
            {studentState.messageObject.showMessage && (
              <CustomAlert
                variant={studentState.messageObject.messageColor}
                message={studentState.messageObject.message}
                handleClose={studentButtonHandlers.handleDismissErrorAlert}
              />
            )}

            <StudentFormInputs studentState={studentState} studentChangeHandlers={studentChangeHandlers} />

            <StudentFormButtons studentState={studentState} studentButtonHandlers={studentButtonHandlers} />
          </>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewStudentScreen;
