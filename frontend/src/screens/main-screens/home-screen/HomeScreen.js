import React from "react";
import styled from "styled-components";
import useHomeScreen from "./useHomeScreen";
import {
  Button,
} from "../../../components/common";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerDiv = styled.div``;

const TitleH1 = styled.h1`
  text-align: center;
`;

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
  const {
    isLoading,
    handleGetCourses,
    handleGetProducts,
    handleGetStudents,
    handleGetInClassInstructors,
    handleGetInCarInstructors,
    handleGetSpecificInCarInstructor,
    handleGetSpecificInClassInstructor,
    handleGetSpecificCourse,
    handleGetSpecificProduct,
    handleGetSpecificStudent,
    handleDeleteCourse,
    handleDeleteProduct,
    handleDeleteStudent,
    handleDeleteInCarInst,
    handleDeleteInClassInst,
    displaying,
    Data,
    displayData,
    navToCourse,
    navToProduct,
    navToStudent,
    navToInClassInst,
    navToInCarInst,
  } = useHomeScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        {displaying === Data.COURSES && <TitleH1>Courses</TitleH1>}
        {displaying === Data.PRODUCTS && <TitleH1>Products</TitleH1>}
        {displaying === Data.STUDENTS && <TitleH1>Students</TitleH1>}
        {displaying === Data.IN_CLASS_INST && (
          <TitleH1>In Class Instructors</TitleH1>
        )}
        {displaying === Data.IN_CAR_INST && (
          <TitleH1>In Car Instructors</TitleH1>
        )}

        <ButtonsDiv>
          <Button onClick={handleGetCourses}>Courses</Button>
          <Button onClick={handleGetProducts}>Products</Button>
          <Button onClick={handleGetStudents}>Students</Button>
          <Button onClick={handleGetInClassInstructors}>In Class Instructors</Button>
          <Button onClick={handleGetInCarInstructors}>In Car Instructors</Button>
        </ButtonsDiv>

        <FormDiv>
          {!isLoading && displaying === Data.COURSES && (
            <Table>
              <TR>
                <TH>Course ID</TH>
                <TH>Course Capacity</TH>
                <TH>Course Start Date</TH>
                <TH>Course End Date</TH>
                <TH>Edit</TH>
                <TH>Delete</TH>
              </TR>
              {displayData.map((data) => (
                <TR>
                  <TD>{data.courseId}</TD>
                  <TD>{data.capacity}</TD>
                  <TD>{data.start_date}</TD>
                  <TD> {data.end_date}</TD>
                  <TD>
                    <Button
                      onClick={() => {
                        navToCourse(data.id);
                      }}
                    >
                      edit
                    </Button>
                  </TD>
                  <TD>
                    <Button onClick={() => {}}>delete</Button>
                  </TD>
                </TR>
              ))}
            </Table>
          )}

          {!isLoading && displaying === Data.PRODUCTS && (
            <Table>
              <TR>
                <TH>Product ID</TH>
                <TH>Product Name</TH>
                <TH>Product Price</TH>
                <TH>Edit</TH>
                <TH>Delete</TH>
              </TR>

              {displayData.map((data) => (
                <TR>
                  <TD>{data.productId}</TD>
                  <TD>{data.name}</TD>
                  <TD>{data.price}</TD>
                  <TD>
                    <Button
                      onClick={() => {
                        navToCourse(data.id);
                      }}
                    >
                      edit
                    </Button>
                  </TD>
                  <TD>
                    <Button onClick={() => {}}>delete</Button>
                  </TD>
                </TR>
              ))}
            </Table>
          )}

          {!isLoading && displaying === Data.STUDENTS && (
            <Table>
              <TR>
                <TH>First Name</TH>
                <TH>Middle Name</TH>
                <TH>Last Name</TH>
                <TH>Date Of Birth</TH>
                <TH>Gender</TH>
                <TH>Cell Phone</TH>
                <TH>Home Phone</TH>
                <TH>Address</TH>
                <TH>City</TH>
                <TH>Postal Code</TH>
                <TH>Driver's License Number</TH>
                <TH>Driver's License Issued Date</TH>
                <TH>Product Driver's License Expiry Date</TH>
                <TH>Product Registered Course</TH>
                <TH>Product Registered Product</TH>
                <TH>Edit</TH>
                <TH>Delete</TH>
              </TR>

              {displayData.map((data) => (
                <TR>
                  <TD>{data.first_name}</TD>
                  <TD>{data.middle_name}</TD>
                  <TD>{data.last_name}</TD>
                  <TD>{data.date_of_birth}</TD>
                  <TD>{data.gender}</TD>
                  <TD>{data.cell_phone_number}</TD>
                  <TD>{data.home_phone_number}</TD>
                  <TD>{data.address}</TD>
                  <TD>{data.address_city}</TD>
                  <TD>{data.address_postal_code}</TD>
                  <TD>{data.drivers_license_id}</TD>
                  <TD>{data.drivers_license_date_issued}</TD>
                  <TD>{data.drivers_license_exp_date}</TD>
                  <TD>{data.registered_course}</TD>
                  <TD>{data.purchased_product}</TD>
                  <TD>
                    <Button
                      onClick={() => {
                        navToCourse(data.id);
                      }}
                    >
                      edit
                    </Button>
                  </TD>
                  <TD>
                    <Button onClick={() => {}}>delete</Button>
                  </TD>
                </TR>
              ))}
            </Table>
          )}

          {!isLoading && displaying === Data.IN_CLASS_INST && (
            <Table>
              <TR>
                <TH>First Name</TH>
                <TH>Last Name</TH>
                <TH>Instructor Driver's License Number</TH>
                <TH>Instructor Driver's License Issued Date</TH>
                <TH>Edit</TH>
                <TH>Delete</TH>
              </TR>

              {displayData.map((data) => (
                <TR>
                  <TD>{data.first_name}</TD>
                  <TD>{data.last_name}</TD>
                  <TD>{data.inst_drivers_license_id}</TD>
                  <TD>{data.inst_drivers_license_exp_date}</TD>
                  <TD>
                    <Button
                      onClick={() => {
                        navToCourse(data.id);
                      }}
                    >
                      edit
                    </Button>
                  </TD>
                  <TD>
                    <Button onClick={() => {}}>delete</Button>
                  </TD>
                </TR>
              ))}
            </Table>
          )}

          {!isLoading && displaying === Data.IN_CAR_INST && (
            <Table>
              <TR>
                <TH>First Name</TH>
                <TH>Last Name</TH>
                <TH>Instructor Driver's License Number</TH>
                <TH>Instructor Driver's License Issued Date</TH>
                <TH>Instructor G License Number</TH>
                <TH>Instructor G License Issued Date</TH>
                <TH>Edit</TH>
                <TH>Delete</TH>
              </TR>

              {displayData.map((data) => (
                <TR>
                  <TD>{data.first_name}</TD>
                  <TD>{data.last_name}</TD>
                  <TD>{data.inst_drivers_license_id}</TD>
                  <TD>{data.inst_drivers_license_exp_date}</TD>
                  <TD>{data.g_drivers_license_id}</TD>
                  <TD>{data.g_drivers_license_exp_date}</TD>
                  <TD>
                    <Button
                      onClick={() => {
                        navToCourse(data.id);
                      }}
                    >
                      edit
                    </Button>
                  </TD>
                  <TD>
                    <Button onClick={() => {}}>delete</Button>
                  </TD>
                </TR>
              ))}
            </Table>
          )}
        </FormDiv>
      </ContainerDiv>
    </WrapperDiv>
  );
};

/**
 * const result = await axios.post ("nodehost:nodeport", {
 * id: id,
 * name: name,
 * })
 */

export default HomeScreen;
