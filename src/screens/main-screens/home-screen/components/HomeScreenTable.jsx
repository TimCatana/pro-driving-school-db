import React from "react";
import styled from "styled-components";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";
import { courseTableHeadings } from "../../../../domain/constants/dbConstants";

const TableDiv = styled.div`
  width: 98vw;
  /* min-width: 750px; */
  overflow-x: auto;
  overflow-y: visible;
  padding: 0;

  display: flex;

  @media only screen and (min-width: 1300px) {
    justify-content: ${(props) =>
      props.table == props.homeState.Data.IN_CAR_INST ? "center;" : ""};
  }
  @media only screen and (min-width: 975px) {
    justify-content: ${(props) =>
      props.table == props.homeState.Data.IN_CLASS_INST ? "center;" : ""};
  }
  @media only screen and (min-width: 975px) {
    justify-content: ${(props) =>
      props.table == props.homeState.Data.IN_CLASS_INST ? "center;" : ""};
  }
  @media only screen and (min-width: 440px) {
    justify-content: ${(props) =>
      props.table == props.homeState.Data.PRODUCTS ? "center;" : ""};
  }
  @media only screen and (min-width: 800px) {
    justify-content: ${(props) =>
      props.table == props.homeState.Data.COURSES ? "center;" : ""};
  }
`;

const HomeScreenTable = (props) => {
  const {
    homeState,
    homeButtonHandlers,
    headings,
    entryId,
    tableKeys,
    handleEdit,
    handleDelete,
  } = props;

  return (
    <TableDiv
      table={homeState.uiModifiersObject.displaying}
      homeState={homeState}
    >
      <TableHome>
        <thead>
          <TRHome>
            {headings.map((heading) => (
              <THHome key={heading}>{heading}</THHome>
            ))}
          </TRHome>
        </thead>
        <tbody>
          {homeState.uiModifiersObject.displayData.map((data) => (
            <TRHome key={data[entryId]}>
              {tableKeys.map((tableKey) => (
                <TDHome key={tableKey}>{data[tableKey]}</TDHome>
              ))}

              <TDHome>
                <Button
                  height="2rem"
                  padding="0 0.5rem"
                  backgroundColor="green"
                  onClick={() => {
                    handleEdit(data[entryId]);
                  }}
                >
                  edit
                </Button>
              </TDHome>
              <TDHome>
                <Button
                  height="2rem"
                  padding="0 0.5rem"
                  backgroundColor="red"
                  onClick={() => {
                    handleDelete(data[entryId]);
                  }}
                >
                  delete
                </Button>
              </TDHome>
            </TRHome>
          ))}
        </tbody>
      </TableHome>
    </TableDiv>
  );
};

export default HomeScreenTable;
