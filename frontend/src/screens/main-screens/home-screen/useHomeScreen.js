import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateValid from "../../../components/helpers/isDateValid";
import axios from "axios";

const useHomeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const [isLoading, _setIsLoading] = useState(false);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetCourses = async () => {
    const result = await axios.get(`http://localhost:4400/course/getAll`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetProducts = async () => {
    const result = await axios.get(`http://localhost:4400/product/getAll`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetStudents = async () => {
    const result = await axios.get(`http://localhost:4400/student/getAll`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    const result = await axios.get(
      `http://localhost:4400/in-class-inst/getAll`
    );

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInCarInstructors = async () => {
    const result = await axios.get(`http://localhost:4400/in-car-inst/getAll`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInCarInstructor = async () => {
    const result = await axios.get(
      `http://localhost:4400/in-car-inst/getOne/123-987-456-ff`
    );

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInClassInstructor = async () => {
    const result = await axios.get(
      `http://localhost:4400/in-class-inst/getOne/123-456-7890-gd`
    );

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificCourse = async () => {
    const result = await axios.get(`http://localhost:4400/course/getOne/23424`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificProduct = async () => {
    const result = await axios.get(
      `http://localhost:4400/product/getOne/123456`
    );

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificStudent = async () => {
    const result = await axios.get(`http://localhost:4400/student/getOne/2`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteCourse = async () => {
    const result = await axios.delete(
      `http://localhost:4400/course/delete/23424`
    );

    console.log(result.data);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteProduct = async () => {
    const result = await axios.delete(
      `http://localhost:4400/product/delete/1212`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteStudent = async () => {
    const result = await axios.delete(
      `http://localhost:4400/student/delete/c`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInst = async () => {
    const result = await axios.delete(
      `http://localhost:4400/in-car-inst/delete/a`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInClassInst = async () => {
    const result = await axios.delete(
      `http://localhost:4400/in-class-inst/delete/dfsdfsd`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  // /**
  //  *  Navigates back to the login screen if no process is currently running.
  //  */
  // const _navigateBack = () => {
  //   if (!isLoading) {
  //     history.goBack();
  //   }
  // };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
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
  };
};

export default useHomeScreen;
