import React from "react";
import { Title } from "../../../../components";

const HomeScreenTitles = (props) => {
  const { homeState } = props;

  return (
    <>
      {homeState.uiModifiersObject.displaying === homeState.Data.COURSES && (
        <Title>Courses</Title>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.PRODUCTS && (
        <Title>Products</Title>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.STUDENTS && (
        <Title>Students</Title>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.IN_CLASS_INST && (
        <Title>In Class Instructors</Title>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.IN_CAR_INST && (
        <Title>In Car Instructors</Title>
      )}
    </>
  );
};

export default HomeScreenTitles;
