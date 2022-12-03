import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isDateFormatYYYYMMDD from "../../../../domain/validators";
import axios from "axios";
import {
  deleteOneCourseUC,
  getAllCoursesUC,
  getAllInCarInstructorsUC,
  getAllInClassInstructorsUC,
  getAllProductsUC,
  getAllStudentsUC,
} from "../../../../domain/db";
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
    homeButtonHandlers.handleGetCourses();
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
