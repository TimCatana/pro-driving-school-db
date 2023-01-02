import React from "react";
import styled from "styled-components";
import { useHomeScreen } from "./hooks";
import { CustomAlert } from "../../../components";
import {
  HomeScreenAddNewButton,
  HomeScreenNothingToDisplayTitles,
  HomeScreenSelectButtons,
  HomeScreenTable,
  HomeScreenTitles,
} from "./components";
import {
  courseTableHeadings,
  inCarInstTableHeadings,
  inClassInstTableHeadings,
  productTableHeadings,
  studentTableHeadings,
} from "../../../domain/constants/dbConstants";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0rem;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
          {!homeState.uiModifiersObject.isLoading &&
            homeState.messageObject.showMessage && (
              <CustomAlert
                variant={homeState.messageObject.messageColor}
                message={homeState.messageObject.message}
                handleClose={homeButtonHandlers.handleDismissErrorAlert}
              />
            )}

          {!homeState.uiModifiersObject.isLoading &&
            homeState.uiModifiersObject.displayData.length > 0 &&
            homeState.uiModifiersObject.displaying ===
              homeState.Data.COURSES && (
              <HomeScreenTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
                headings={[
                  "Course ID",
                  "Capacity",
                  "Start Date",
                  "End Date",
                  "Digital / In Person",
                  "In Class Instructor Id",
                  "Edit",
                  "Delete",
                ]}
                entryId={courseTableHeadings.id}
                tableKeys={[
                  courseTableHeadings.courseId,
                  courseTableHeadings.capacity,
                  courseTableHeadings.startDate,
                  courseTableHeadings.endDate,
                  courseTableHeadings.isDigital,
                  courseTableHeadings.inClassInstructorId,
                ]}
                handleEdit={(primary_key) => {
                  homeButtonHandlers.navToCourse(primary_key);
                }}
                handleDelete={(primary_key) => {
                  homeButtonHandlers.handleDeleteCourse(primary_key);
                }}
              />
            )}

          {!homeState.uiModifiersObject.isLoading &&
            homeState.uiModifiersObject.displayData.length > 0 &&
            homeState.uiModifiersObject.displaying ===
              homeState.Data.PRODUCTS && (
              <HomeScreenTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
                headings={[
                  "Product ID",
                  "Product Name",
                  "Product Price",
                  "Edit",
                  "Delete",
                ]}
                entryId={productTableHeadings.id}
                tableKeys={[
                  productTableHeadings.productId,
                  productTableHeadings.name,
                  productTableHeadings.price,
                ]}
                handleEdit={(primary_key) => {
                  homeButtonHandlers.navToProduct(primary_key);
                }}
                handleDelete={(primary_key) => {
                  homeButtonHandlers.handleDeleteProduct(primary_key);
                }}
              />
            )}

          {!homeState.uiModifiersObject.isLoading &&
            homeState.uiModifiersObject.displayData.length > 0 &&
            homeState.uiModifiersObject.displaying ===
              homeState.Data.STUDENTS && (
              <HomeScreenTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
                headings={[
                  "ID",
                  "First Name",
                  "Middle Name",
                  "Last Name",
                  "Date Of Birth",
                  "Gender",
                  "Height",
                  "Cell Phone",
                  "Home Phone",
                  "Address",
                  "Apt. No.",
                  "City",
                  "Province",
                  "Postal Code",
                  "License Number",
                  "License Class",
                  "License Issued Date",
                  "License Expiry Date",
                  "Registered Course",
                  "Registered Product",
                  "In Car Instructor Id",
                  "Edit",
                  "Delete",
                ]}
                entryId={studentTableHeadings.id}
                tableKeys={[
                  studentTableHeadings.id,
                  studentTableHeadings.firstName,
                  studentTableHeadings.middleName,
                  studentTableHeadings.lastName,
                  studentTableHeadings.dateOfBirth,
                  studentTableHeadings.gender,
                  studentTableHeadings.height,
                  studentTableHeadings.cellPhoneNumber,
                  studentTableHeadings.homePhoneNumber,
                  studentTableHeadings.address,
                  studentTableHeadings.addressAptNum,
                  studentTableHeadings.addressCity,
                  studentTableHeadings.addressState,
                  studentTableHeadings.addressPostalCode,
                  studentTableHeadings.driversLicenseId,
                  studentTableHeadings.driversLicenseClass,
                  studentTableHeadings.driversLicenseIssuedDate,
                  studentTableHeadings.driversLicenseExpDate,
                  studentTableHeadings.registeredCourse,
                  studentTableHeadings.purchasedProduct,
                  studentTableHeadings.inCarInstId,
                ]}
                handleEdit={(primary_key) => {
                  homeButtonHandlers.navToStudent(primary_key);
                }}
                handleDelete={(primary_key) => {
                  homeButtonHandlers.handleDeleteStudent(primary_key);
                }}
              />
            )}

          {!homeState.uiModifiersObject.isLoading &&
            homeState.uiModifiersObject.displayData.length > 0 &&
            homeState.uiModifiersObject.displaying ===
              homeState.Data.IN_CLASS_INST && (
              <HomeScreenTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
                headings={[
                  "ID",
                  "First Name",
                  "Last Name",
                  "Instructor Driver's License Number",
                  "Instructor Driver's License Issued Date",
                  "Edit",
                  "Delete",
                ]}
                entryId={inClassInstTableHeadings.id}
                tableKeys={[
                  inClassInstTableHeadings.id,
                  inClassInstTableHeadings.firstName,
                  inClassInstTableHeadings.lastName,
                  inClassInstTableHeadings.driversLicenseId,
                  inClassInstTableHeadings.driversLicenseExpDate,
                ]}
                handleEdit={(primary_key) => {
                  homeButtonHandlers.navToInClassInst(primary_key);
                }}
                handleDelete={(primary_key) => {
                  homeButtonHandlers.handleDeleteInClassInst(primary_key);
                }}
              />
            )}

          {!homeState.uiModifiersObject.isLoading &&
            homeState.uiModifiersObject.displayData.length > 0 &&
            homeState.uiModifiersObject.displaying ===
              homeState.Data.IN_CAR_INST && (
              <HomeScreenTable
                homeState={homeState}
                homeButtonHandlers={homeButtonHandlers}
                headings={[
                  "ID",
                  "First Name",
                  "Last Name",
                  "Instructor Driver's License Number",
                  "Instructor Driver's License Issued Date",
                  "G License Number",
                  "G License Issued Date",
                  "Edit",
                  "Delete",
                ]}
                entryId={inCarInstTableHeadings.id}
                tableKeys={[
                  inCarInstTableHeadings.id,
                  inCarInstTableHeadings.firstName,
                  inCarInstTableHeadings.lastName,
                  inCarInstTableHeadings.driversLicenseId,
                  inCarInstTableHeadings.driversLicenseExpDate,
                  inCarInstTableHeadings.gDriversLicenseId,
                  inCarInstTableHeadings.gDriversLicenseExpDate,
                ]}
                handleEdit={(primary_key) => {
                  homeButtonHandlers.navToInCarInst(primary_key);
                }}
                handleDelete={(primary_key) => {
                  homeButtonHandlers.handleDeleteInCarInst(primary_key);
                }}
              />
            )}

          {homeState.uiModifiersObject.displayData.length == 0 && (
            <HomeScreenNothingToDisplayTitles homeState={homeState} />
          )}
        </FormDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default HomeScreen;
