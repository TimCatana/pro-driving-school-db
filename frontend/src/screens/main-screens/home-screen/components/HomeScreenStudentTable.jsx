import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";
import { studentTableHeadings } from "../../../../domain/constants/dbConstants";

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
          <THHome>Height</THHome>
          <THHome>Cell Phone</THHome>
          <THHome>Home Phone</THHome>
          <THHome>Address</THHome>
          <THHome>Apt. No.</THHome>
          <THHome>City</THHome>
          <THHome>Postal Code</THHome>
          <THHome>License Number</THHome>
          <THHome>License Class</THHome>
          <THHome>License Issued Date</THHome>
          <THHome>License Expiry Date</THHome>
          <THHome>Registered Course</THHome>
          <THHome>Registered Product</THHome>
          <THHome>Edit</THHome>
          <THHome>Delete</THHome>
        </TRHome>
      </thead>
      <tbody>
        {props.homeState.displayData.map((data) => (
          <TRHome key={data[studentTableHeadings.id]}>
            <TDHome>{data[studentTableHeadings.firstName]}</TDHome>
            <TDHome>{data[studentTableHeadings.middleName]}</TDHome>
            <TDHome>{data[studentTableHeadings.lastName]}</TDHome>
            <TDHome>{data[studentTableHeadings.dateOfBirth]}</TDHome>
            <TDHome>{data[studentTableHeadings.gender]}</TDHome>
            <TDHome>{data[studentTableHeadings.height]}</TDHome>
            <TDHome>{data[studentTableHeadings.cellPhoneNumber]}</TDHome>
            <TDHome>{data[studentTableHeadings.homePhoneNumber]}</TDHome>
            <TDHome>{data[studentTableHeadings.address]}</TDHome>
            <TDHome>{data[studentTableHeadings.addressAptNum]}</TDHome>
            <TDHome>{data[studentTableHeadings.addressCity]}</TDHome>
            <TDHome>{data[studentTableHeadings.addressPostalCode]}</TDHome>
            <TDHome>{data[studentTableHeadings.driversLicenseId]}</TDHome>
            <TDHome>{data[studentTableHeadings.driversLicenseClass]}</TDHome>
            <TDHome>
              {data[studentTableHeadings.driversLicenseIssuedDate]}
            </TDHome>
            <TDHome>{data[studentTableHeadings.driversLicenseExpDate]}</TDHome>
            <TDHome>{data[studentTableHeadings.registeredCourse]}</TDHome>
            <TDHome>{data[studentTableHeadings.purchasedProduct]}</TDHome>
            <TDHome>
              <Button
                height="2rem"
                padding="0 0.5rem"
                backgroundColor="green"
                onClick={() => {
                  props.homeButtonHandlers.navToStudent(
                    data[studentTableHeadings.id]
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
                  props.homeButtonHandlers.handleDeleteStudent(
                    data[studentTableHeadings.id]
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

export default HomeScreenStudentTable;
