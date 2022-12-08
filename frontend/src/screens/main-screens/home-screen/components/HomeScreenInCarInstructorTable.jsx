import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";
import { inCarInstTableHeadings } from "../../../../domain/constants/dbConstants";

const HomeScreenInCarInstructorTable = (props) => {
  return (
    <TableHome>
      <thead>
        <TRHome>
          <THHome>First Name</THHome>
          <THHome>Last Name</THHome>
          <THHome>Instructor Driver's License Number</THHome>
          <THHome>Instructor Driver's License Issued Date</THHome>
          <THHome>Instructor G License Number</THHome>
          <THHome>Instructor G License Issued Date</THHome>
          <THHome>Edit</THHome>
          <THHome>Delete</THHome>
        </TRHome>
      </thead>
      <tbody>
        {props.homeState.displayData.map((data) => (
          <TRHome key={data[inCarInstTableHeadings.id]}>
            <TDHome>{data[inCarInstTableHeadings.firstName]}</TDHome>
            <TDHome>{data[inCarInstTableHeadings.lastName]}</TDHome>
            <TDHome>{data[inCarInstTableHeadings.driversLicenseId]}</TDHome>
            <TDHome>
              {data[inCarInstTableHeadings.driversLicenseExpDate]}
            </TDHome>
            <TDHome>{data[inCarInstTableHeadings.gDriversLicenseId]}</TDHome>
            <TDHome>
              {data[inCarInstTableHeadings.driversLicenseExpDate]}
            </TDHome>
            <TDHome>
              <Button
                height="2rem"
                padding="0 0.5rem"
                backgroundColor="green"
                onClick={() => {
                  props.homeButtonHandlers.navToInCarInst(
                    data[inCarInstTableHeadings.id]
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
                  props.homeButtonHandlers.handleDeleteInCarInst(
                    data[inCarInstTableHeadings.id]
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

export default HomeScreenInCarInstructorTable;
