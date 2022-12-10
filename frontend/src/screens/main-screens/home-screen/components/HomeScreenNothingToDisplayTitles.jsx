import React from "react";
import { Title } from "../../../../components";

const HomeScreenNothingToDisplayTitles = (props) => {
  const { homeState } = props;

  return (
    <>
      {homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.COURSES && <Title>Failed To Get Courses</Title>}
      {homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.PRODUCTS && <Title>Failed To Get Products</Title>}
      {homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.STUDENTS && <Title>Failed To Get Students</Title>}
      {homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.IN_CLASS_INST && (
          <Title>Failed To Get In Class Instructors</Title>
        )}
      {homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.IN_CAR_INST && (
          <Title>Failed To Get In Car Instructors</Title>
        )}

      {!homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.COURSES && <Title>No Courses To Display</Title>}
      {!homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.PRODUCTS && <Title>No Products To Display</Title>}
      {!homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.STUDENTS && <Title>No Students To Display</Title>}
      {!homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.IN_CLASS_INST && (
          <Title>No In Class Instructors To Display</Title>
        )}
      {!homeState.uiModifiersObject.failedToGetData &&
        homeState.uiModifiersObject.displaying === homeState.Data.IN_CAR_INST && (
          <Title>No In Car Instructors To Display</Title>
        )}
    </>
  );
};

export default HomeScreenNothingToDisplayTitles;
