import React from "react";
import { Button } from "../../../../components";

const HomeScreenSelectButtons = (props) => {
  return (
    <>
      <Button onClick={props.homeButtonHandlers.handleGetCourses}>Courses</Button>
      <Button onClick={props.homeButtonHandlers.handleGetProducts}>Products</Button>
      <Button onClick={props.homeButtonHandlers.handleGetStudents}>Students</Button>
      <Button onClick={props.homeButtonHandlers.handleGetInClassInstructors}>In Class Instructors</Button>
      <Button onClick={props.homeButtonHandlers.handleGetInCarInstructors}>In Car Instructors</Button>
    </>
  );
};

export default HomeScreenSelectButtons;
