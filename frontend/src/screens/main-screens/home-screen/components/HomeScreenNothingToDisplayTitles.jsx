import React from "react";
import { Title } from "../../../../components";

const HomeScreenNothingToDisplayTitles = (props) => {
  return (
    <>
      {props.homeState.displaying === props.homeState.Data.COURSES && (
        <Title>No Courses To Display</Title>
      )}
      {props.homeState.displaying === props.homeState.Data.PRODUCTS && (
        <Title>No Products To Display</Title>
      )}
      {props.homeState.displaying === props.homeState.Data.STUDENTS && (
        <Title>No Students To Display</Title>
      )}
      {props.homeState.displaying === props.homeState.Data.IN_CLASS_INST && (
        <Title>No In Class Instructors To Display</Title>
      )}
      {props.homeState.displaying === props.homeState.Data.IN_CAR_INST && (
        <Title>No In Car Instructors To Display</Title>
      )}
    </>
  );
};

export default HomeScreenNothingToDisplayTitles;
