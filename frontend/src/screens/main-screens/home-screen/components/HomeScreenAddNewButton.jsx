import React from "react";
import { Button } from "../../../../components";

/**
 * @NOTE - navigating with a primary_key of "0" will go to the "add new" screen.
 * @param {*} props
 * @returns
 */
const HomeScreenAddNewButton = (props) => {
  const { homeState, homeButtonHandlers } = props;

  return (
    <>
      {homeState.uiModifiersObject.displaying === homeState.Data.COURSES && (
        <Button
          onClick={() => {
            homeButtonHandlers.navToCourse(0);
          }}
        >
          Add New Course
        </Button>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.PRODUCTS && (
        <Button
          onClick={() => {
            homeButtonHandlers.navToProduct(0);
          }}
        >
          Add New Product
        </Button>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.STUDENTS && (
        <Button
          onClick={() => {
            homeButtonHandlers.navToStudent(0);
          }}
        >
          Add New Student
        </Button>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.IN_CLASS_INST && (
        <Button
          onClick={() => {
            homeButtonHandlers.navToInClassInst(0);
          }}
        >
          Add New In Class Instructor
        </Button>
      )}
      {homeState.uiModifiersObject.displaying === homeState.Data.IN_CAR_INST && (
        <Button
          onClick={() => {
            homeButtonHandlers.navToInCarInst(0);
          }}
        >
          Add New In Car Instructor
        </Button>
      )}
    </>
  );
};

export default HomeScreenAddNewButton;
