import React from "react";
import { Button, TableHome, TDHome, THHome, TRHome } from "../../../../components";
import { courseTableHeadings } from "../../../../domain/constants/dbConstants";

const HomeScreenTable = (props) => {
  const { homeState, homeButtonHandlers, headings, entryId, tableKeys, handleEdit, handleDelete } = props;

  return (
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
  );
};

export default HomeScreenTable;
