import React from "react";
import styled from "styled-components";
import { useHomeScreen } from "./hooks";
import { Button, Title } from "../../../components";
import {
  HomeScreenButtons,
  HomeScreenCourseTable,
  HomeScreenInCarInstructorTable,
  HomeScreenInClassInstructorTable,
  HomeScreenProductTable,
  HomeScreenStudentTable,
  HomeScreenTitles,
} from "./components";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerDiv = styled.div``;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableDiv = styled.div`
  display: flex;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TD = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
const TH = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
const TR = styled.tr`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;

  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

const HomeScreen = () => {
  const { homeState, homeButtonHandlers } = useHomeScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <HomeScreenTitles homeState={homeState} />

        <ButtonsDiv>
          <HomeScreenButtons homeButtonHandlers={homeButtonHandlers} />
        </ButtonsDiv>

        <FormDiv>
          {!homeState.isLoading &&
            homeState.displaying === homeState.Data.COURSES && (
              <HomeScreenCourseTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displaying === homeState.Data.PRODUCTS && (
              <HomeScreenProductTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displaying === homeState.Data.STUDENTS && (
              <HomeScreenStudentTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displaying === homeState.Data.IN_CLASS_INST && (
              <HomeScreenInClassInstructorTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}

          {!homeState.isLoading &&
            homeState.displaying === homeState.Data.IN_CAR_INST && (
              <HomeScreenInCarInstructorTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
              />
            )}
        </FormDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default HomeScreen;
