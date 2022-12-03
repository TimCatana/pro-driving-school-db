import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";

const HomeScreenStudentTable = (props) => {
  return (
    <TableHome>
      <thead>
        <TRHome>
          <THHome>First Name</THHome>
          <THHome>Middle Name</THHome>
          <THHome>Last Name</THHome>
          <THHome>Date Of Birth</THHome>
          <THHome>Gender</THHome>
          <THHome>Cell Phone</THHome>
          <THHome>Home Phone</THHome>
          <THHome>Address</THHome>
          <THHome>City</THHome>
          <THHome>Postal Code</THHome>
          <THHome>Driver's License Number</THHome>
          <THHome>Driver's License Issued Date</THHome>
          <THHome>Product Driver's License Expiry Date</THHome>
          <THHome>Product Registered Course</THHome>
          <THHome>Product Registered Product</THHome>
          <THHome>Edit</THHome>
          <THHome>Delete</THHome>
        </TRHome>
      </thead>
      <tbody>
        {props.homeState.displayData.map((data) => (
          <TRHome key={data.id}>
            <TDHome>{data.first_name}</TDHome>
            <TDHome>{data.middle_name}</TDHome>
            <TDHome>{data.last_name}</TDHome>
            <TDHome>{data.date_of_birth}</TDHome>
            <TDHome>{data.gender}</TDHome>
            <TDHome>{data.cell_phone_number}</TDHome>
            <TDHome>{data.home_phone_number}</TDHome>
            <TDHome>{data.address}</TDHome>
            <TDHome>{data.address_city}</TDHome>
            <TDHome>{data.address_postal_code}</TDHome>
            <TDHome>{data.drivers_license_id}</TDHome>
            <TDHome>{data.drivers_license_date_issued}</TDHome>
            <TDHome>{data.drivers_license_exp_date}</TDHome>
            <TDHome>{data.registered_course}</TDHome>
            <TDHome>{data.purchased_product}</TDHome>
            <TDHome>
              <Button
                onClick={() => {
                  props.homeButtonHandlers.navToStudent(data.id);
                }}
              >
                edit
              </Button>
            </TDHome>
            <TDHome>
              <Button
                onClick={() => {
                  props.homeButtonHandlers.handleDeleteStudent(data.id);
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

export default HomeScreenStudentTable;
