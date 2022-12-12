import React from "react";
import { Title } from "../../../../components";

const HomeScreenTitles = (props) => {
  return (
    <>
      {props.homeState.displaying === props.homeState.Data.COURSES && <Title>Courses</Title>}
      {props.homeState.displaying === props.homeState.Data.PRODUCTS && <Title>Products</Title>}
      {props.homeState.displaying === props.homeState.Data.STUDENTS && <Title>Students</Title>}
      {props.homeState.displaying === props.homeState.Data.IN_CLASS_INST && <Title>In Class Instructors</Title>}
      {props.homeState.displaying === props.homeState.Data.IN_CAR_INST && <Title>In Car Instructors</Title>}
    </>
  );
};

export default HomeScreenTitles;
