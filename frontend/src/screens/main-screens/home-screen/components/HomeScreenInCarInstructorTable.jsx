import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";

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
          <TRHome key={data.id}>
            <TDHome>{data.first_name}</TDHome>
            <TDHome>{data.last_name}</TDHome>
            <TDHome>{data.inst_drivers_license_id}</TDHome>
            <TDHome>{data.inst_drivers_license_exp_date}</TDHome>
            <TDHome>{data.g_drivers_license_id}</TDHome>
            <TDHome>{data.g_drivers_license_exp_date}</TDHome>
            <TDHome>
              <Button
                onClick={() => {
                  props.homeButtonHandlers.navToInCarInst(data.id);
                }}
              >
                edit
              </Button>
            </TDHome>
            <TDHome>
              <Button
                onClick={() => {
                  props.homeButtonHandlers.handleDeleteInCarInst(data.id);
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
