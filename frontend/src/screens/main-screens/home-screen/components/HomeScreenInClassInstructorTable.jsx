import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";
import { inClassInstTableHeadings } from "../../../../domain/constants/dbConstants";

const HomeScreenInClassInstructorTable = (props) => {
  return (
    <TableHome>
      <thead>
        <TRHome>
          <THHome>First Name</THHome>
          <THHome>Last Name</THHome>
          <THHome>Instructor Driver's License Number</THHome>
          <THHome>Instructor Driver's License Issued Date</THHome>
          <THHome>Edit</THHome>
          <THHome>Delete</THHome>
        </TRHome>
      </thead>
      <tbody>
        {props.homeState.displayData.map((data) => (
          <TRHome key={data[inClassInstTableHeadings.id]}>
            <TDHome>{data[inClassInstTableHeadings.firstName]}</TDHome>
            <TDHome>{data[inClassInstTableHeadings.lastName]}</TDHome>
            <TDHome>{data[inClassInstTableHeadings.driversLicenseId]}</TDHome>
            <TDHome>
              {data[inClassInstTableHeadings.driversLicenseExpDate]}
            </TDHome>
            <TDHome>
              <Button
                height="2rem"
                padding="0 0.5rem"
                backgroundColor="green"
                onClick={() => {
                  props.homeButtonHandlers.navToInClassInst(
                    data[inClassInstTableHeadings.id]
                  );
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
                  props.homeButtonHandlers.handleDeleteInClassInst(
                    data[inClassInstTableHeadings.id]
                  );
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

export default HomeScreenInClassInstructorTable;
