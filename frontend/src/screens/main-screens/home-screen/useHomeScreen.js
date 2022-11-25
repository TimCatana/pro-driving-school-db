import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isDateValid from "../../../components/helpers/validators/isDateValid";
import axios from "axios";

const useHomeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const Data = {
    COURSES: 0,
    PRODUCTS: 1,
    STUDENTS: 2,
    IN_CLASS_INST: 3,
    IN_CAR_INST: 4,
  };

  const navigation = useNavigate();

  const [isLoading, _setIsLoading] = useState(true);
  const [displaying, _setDisplaying] = useState(Data.COURSES);
  const [displayData, _setDisplayData] = useState([]);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/
  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    handleGetCourses();
  }, []);

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
    _setIsLoading(true);
    const result = await axios.get(`http://localhost:4400/course/getAll`);

    if (result.data.status == 200) {
      _setDisplaying(Data.COURSES);
      _setDisplayData(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetProducts = async () => {
    _setIsLoading(true);
    const result = await axios.get(`http://localhost:4400/product/getAll`);

    if (result.data.status == 200) {
      _setDisplaying(Data.PRODUCTS);
      _setDisplayData(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetStudents = async () => {
    _setIsLoading(true);
    const result = await axios.get(`http://localhost:4400/student/getAll`);

    if (result.data.status == 200) {
      _setDisplaying(Data.STUDENTS);
      _setDisplayData(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    _setIsLoading(true);
    const result = await axios.get(
      `http://localhost:4400/in-class-inst/getAll`
    );

    if (result.data.status == 200) {
      _setDisplaying(Data.IN_CLASS_INST);
      _setDisplayData(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInCarInstructors = async () => {
    _setIsLoading(true);
    const result = await axios.get(`http://localhost:4400/in-car-inst/getAll`);

    if (result.data.status == 200) {
      _setDisplaying(Data.IN_CAR_INST);
      _setDisplayData(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }

    _setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInCarInstructor = async () => {
    _setIsLoading(true);
    const result = await axios.get(
      `http://localhost:4400/in-car-inst/getOne/123-987-456-ff`
    );

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInClassInstructor = async () => {
    _setIsLoading(true);
    const result = await axios.get(
      `http://localhost:4400/in-class-inst/getOne/123-456-7890-gd`
    );

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificCourse = async () => {
    _setIsLoading(true);
    const result = await axios.get(`http://localhost:4400/course/getOne/23424`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificProduct = async () => {
    _setIsLoading(true);
    const result = await axios.get(
      `http://localhost:4400/product/getOne/123456`
    );

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificStudent = async () => {
    _setIsLoading(true);
    const result = await axios.get(`http://localhost:4400/student/getOne/2`);

    if (result.data.status != 200) {
      console.log(result.data);
    } else {
      console.log(result.data.query);
    }

    _setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteCourse = async () => {
    _setIsLoading(true);
    const result = await axios.delete(
      `http://localhost:4400/course/delete/23424`
    );

    console.log(result.data);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteProduct = async () => {
    _setIsLoading(true);
    const result = await axios.delete(
      `http://localhost:4400/product/delete/1212`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteStudent = async () => {
    _setIsLoading(true);
    const result = await axios.delete(`http://localhost:4400/student/delete/c`);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInst = async () => {
    _setIsLoading(true);
    const result = await axios.delete(
      `http://localhost:4400/in-car-inst/delete/a`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }

    _setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInClassInst = async () => {
    _setIsLoading(true);
    const result = await axios.delete(
      `http://localhost:4400/in-class-inst/delete/dfsdfsd`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }

    _setIsLoading(false);
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

  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToCourse = (primaryKey) => {
    if (!isLoading) {
      // navigate.goBack();
      navigation(`/course/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToProduct = (primaryKey) => {
    if (!isLoading) {
      // navigate.goBack();
      navigation(`/product/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToStudent = (primaryKey) => {
    if (!isLoading) {
      // navigate.goBack();
      navigation(`/student/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToInClassInst = (primaryKey) => {
    if (!isLoading) {
      // navigate.goBack();
      navigation(`/in-class-inst/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToInCarInst = (primaryKey) => {
    if (!isLoading) {
      // navigate.goBack();
      navigation(`/in-car-inst/${primaryKey}`);
    }
  };

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
    displaying,
    Data,
    displayData,
    navToCourse,
    navToProduct,
    navToStudent,
    navToInClassInst,
    navToInCarInst,
  };
};

export default useHomeScreen;
