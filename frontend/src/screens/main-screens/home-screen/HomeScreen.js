import React from "react";
import styled from "styled-components";
import { useHomeScreen } from "./hooks";
import { Button, Title } from "../../../components";
import {
  HomeScreenAddNewButton,
  HomeScreenButtons,
  HomeScreenCourseTable,
  HomeScreenInCarInstructorTable,
  HomeScreenInClassInstructorTable,
  HomeScreenNothingToDisplayTitles,
  HomeScreenProductTable,
  HomeScreenSelectButtons,
  HomeScreenStudentTable,
  HomeScreenTitles,
} from "./components";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerDiv = styled.div``;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const HomeScreen = () => {
  const { homeState, homeButtonHandlers } = useHomeScreen();
  return (
    <WrapperDiv>
      <ContainerDiv>
        <HomeScreenTitles homeState={homeState} />

        <ButtonsDiv>
          <HomeScreenSelectButtons
            homeState={homeState}
            homeButtonHandlers={homeButtonHandlers}
          />
        </ButtonsDiv>

        <ButtonsDiv>
          <HomeScreenAddNewButton
            homeState={homeState}
            homeButtonHandlers={homeButtonHandlers}
          />
        </ButtonsDiv>

        <FormDiv>
          {!homeState.isLoading &&
            homeState.displayData.length > 0 &&
            homeState.displaying === homeState.Data.COURSES && (
              <HomeScreenCourseTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displayData.length > 0 &&
            homeState.displaying === homeState.Data.PRODUCTS && (
              <HomeScreenProductTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displayData.length > 0 &&
            homeState.displaying === homeState.Data.STUDENTS && (
              <HomeScreenStudentTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displayData.length > 0 &&
            homeState.displaying === homeState.Data.IN_CLASS_INST && (
              <HomeScreenInClassInstructorTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displayData.length > 0 &&
            homeState.displaying === homeState.Data.IN_CAR_INST && (
              <HomeScreenInCarInstructorTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {homeState.displayData.length == 0 && (
            <HomeScreenNothingToDisplayTitles homeState={homeState} />
          )}
        </FormDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default HomeScreen;
