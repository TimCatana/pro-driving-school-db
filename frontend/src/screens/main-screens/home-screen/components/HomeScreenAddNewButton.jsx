import React from "react";
import { Button } from "../../../../components";

/**
 * @NOTE - navigating with a primary_key of "0" will go to the "add new" screen.  
 * @param {*} props 
 * @returns 
 */
const HomeScreenAddNewButton = (props) => {
  return (
    <>
      {props.homeState.displaying === props.homeState.Data.COURSES && (
        <Button
          onClick={() => {
            props.homeButtonHandlers.navToCourse(0);
          }}
        >
          Add New Course
        </Button>
      )}
      {props.homeState.displaying === props.homeState.Data.PRODUCTS && (
        <Button
          onClick={() => {
            props.homeButtonHandlers.navToProduct(0);
          }}
        >
          Add New Product
        </Button>
      )}
      {props.homeState.displaying === props.homeState.Data.STUDENTS && (
        <Button
          onClick={() => {
            props.homeButtonHandlers.navToStudent(0);
          }}
        >
          Add New Student
        </Button>
      )}
      {props.homeState.displaying === props.homeState.Data.IN_CLASS_INST && (
        <Button
          onClick={() => {
            props.homeButtonHandlers.navToInClassInst(0);
          }}
        >
          Add New In Class Instructor
        </Button>
      )}
      {props.homeState.displaying === props.homeState.Data.IN_CAR_INST && (
        <Button
          onClick={() => {
            props.homeButtonHandlers.navToInCarInst(0);
          }}
        >
          Add New In Car Instructor
        </Button>
      )}
    </>
  );
};

export default HomeScreenAddNewButton;
