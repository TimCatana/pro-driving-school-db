import { useEffect } from "react";
import useHomeScreenStates from "./useHomeScreenStates";
import useHomeScreenButtonHandlers from "./useHomeScreenButtonHandlers";

const useHomeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const { homeState } = useHomeScreenStates();

  const { homeButtonHandlers } = useHomeScreenButtonHandlers(homeState);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/
  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    homeState.uiModifiersObject.setIsLoading(true);
    if (homeState.query.initialSelection == "courses") {
      homeButtonHandlers.handleGetCourses();
    } else if (homeState.query.initialSelection == "products") {
      homeButtonHandlers.handleGetProducts();
    } else if (homeState.query.initialSelection == "students") {
      homeButtonHandlers.handleGetStudents();
    } else if (homeState.query.initialSelection == "in-class-instructors") {
      homeButtonHandlers.handleGetInClassInstructors();
    } else if (homeState.query.initialSelection == "in-car-instructors") {
      homeButtonHandlers.handleGetInCarInstructors();
    } else {
      homeButtonHandlers.handleGetCourses();
    }
    homeState.uiModifiersObject.setIsLoading(false);
  }, []);

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    homeState,
    homeButtonHandlers,
  };
};

export default useHomeScreen;
