import AlertVariants from "../../../../domain/constants/AlertVariants";
import { Results } from "../../../../domain/constants/Results";
import {
  deleteOneCourseUC,
  deleteOneInCarInstructorUC,
  deleteOneInClassInstructorUC,
  deleteOneProductUC,
  deleteOneStudentUC,
  getAllCoursesUC,
  getAllInCarInstructorsUC,
  getAllInClassInstructorsUC,
  getAllProductsUC,
  getAllStudentsUC,
} from "../../../../domain/db";

const useHomeScreenButtonHandlers = (homeState) => {
  /***************/
  /***** GET *****/
  /***************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetCourses = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.COURSES);

    const result = await getAllCoursesUC();
    homeState.uiModifiersObject.setDisplayData(result.data);

    result.status == Results.SUCCESS
      ? homeState.uiModifiersObject.setFailedToGetData(false)
      : homeState.uiModifiersObject.setFailedToGetData(true);

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetProducts = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.PRODUCTS);

    const result = await getAllProductsUC();
    homeState.uiModifiersObject.setDisplayData(result.data);

    result.status == Results.SUCCESS
      ? homeState.uiModifiersObject.setFailedToGetData(false)
      : homeState.uiModifiersObject.setFailedToGetData(true);

    homeState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetStudents = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.STUDENTS);

    const result = await getAllStudentsUC();
    homeState.uiModifiersObject.setDisplayData(result.data);

    result.status == Results.SUCCESS
      ? homeState.uiModifiersObject.setFailedToGetData(false)
      : homeState.uiModifiersObject.setFailedToGetData(true);

    homeState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.IN_CLASS_INST);

    const result = await getAllInClassInstructorsUC();
    homeState.uiModifiersObject.setDisplayData(result.data);

    result.status == Results.SUCCESS
      ? homeState.uiModifiersObject.setFailedToGetData(false)
      : homeState.uiModifiersObject.setFailedToGetData(true);

    homeState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInCarInstructors = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.IN_CAR_INST);

    const result = await getAllInCarInstructorsUC();
    console.log(result);
    homeState.uiModifiersObject.setDisplayData(result.data);

    result.status == Results.SUCCESS
      ? homeState.uiModifiersObject.setFailedToGetData(false)
      : homeState.uiModifiersObject.setFailedToGetData(true);

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /******************/
  /***** DELETE *****/
  /******************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteCourse = async (primaryKey) => {
    homeState.uiModifiersObject.setIsLoading(true);

    const result = await deleteOneCourseUC(primaryKey);

    if (result.status == Results.SUCCESS) {
      homeState.messageObject.setMessage("SUCCESS - Successfully delete course");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetCourses();
    } else {
      homeState.messageObject.setMessage("ERROR - Failed to delete course");
      homeState.messageObject.setMessageColor(AlertVariants.DANGER);
      homeState.messageObject.setShowMessage(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteProduct = async (primaryKey) => {
    homeState.uiModifiersObject.setIsLoading(true);

    const result = await deleteOneProductUC(primaryKey);

    if (result.status == Results.SUCCESS) {
      homeState.messageObject.setMessage("SUCCESS - Successfully delete product");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetProducts();
    } else {
      homeState.messageObject.setMessage("ERROR - Failed to delete product");
      homeState.messageObject.setMessageColor(AlertVariants.DANGER);
      homeState.messageObject.setShowMessage(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteStudent = async (primaryKey) => {
    homeState.uiModifiersObject.setIsLoading(true);

    const result = await deleteOneStudentUC(primaryKey);

    if (result.status == Results.SUCCESS) {
      homeState.messageObject.setMessage("SUCCESS - Successfully delete student");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetStudents();
    } else {
      homeState.messageObject.setMessage("ERROR - Failed to delete student");
      homeState.messageObject.setMessageColor(AlertVariants.DANGER);
      homeState.messageObject.setShowMessage(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInst = async (primaryKey) => {
    homeState.uiModifiersObject.setIsLoading(true);

    const result = await deleteOneInCarInstructorUC(primaryKey);

    if (result.status == Results.SUCCESS) {
      homeState.messageObject.setMessage("SUCCESS - Successfully delete in car instructor");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetInCarInstructors();
    } else {
      homeState.messageObject.setMessage("ERROR - Failed to delete in car instructor");
      homeState.messageObject.setMessageColor(AlertVariants.DANGER);
      homeState.messageObject.setShowMessage(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInClassInst = async (primaryKey) => {
    homeState.uiModifiersObject.setIsLoading(true);

    const result = await deleteOneInClassInstructorUC(primaryKey);

    if (result.status == Results.SUCCESS) {
      homeState.messageObject.setMessage("SUCCESS - Successfully delete in class instructor");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetInClassInstructors();
    } else {
      homeState.messageObject.setMessage("ERROR - Failed to delete in class instructor");
      homeState.messageObject.setMessageColor(AlertVariants.DANGER);
      homeState.messageObject.setShowMessage(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /**********************/
  /***** NAVIGATION *****/
  /**********************/

  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToCourse = (primaryKey) => {
    if (!homeState.uiModifiersObject.isLoading) {
      homeState.navigation(`/course/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToProduct = (primaryKey) => {
    if (!homeState.uiModifiersObject.isLoading) {
      homeState.navigation(`/product/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToStudent = (primaryKey) => {
    if (!homeState.uiModifiersObject.isLoading) {
      homeState.navigation(`/student/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToInClassInst = (primaryKey) => {
    if (!homeState.uiModifiersObject.isLoading) {
      homeState.navigation(`/in-class-inst/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToInCarInst = (primaryKey) => {
    if (!homeState.uiModifiersObject.isLoading) {
      homeState.navigation(`/in-car-inst/${primaryKey}`);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDismissErrorAlert = async () => {
    homeState.messageObject.setShowMessage(false);
  };

  const homeButtonHandlers = {
    handleGetCourses,
    handleGetProducts,
    handleGetStudents,
    handleGetInCarInstructors,
    handleGetInClassInstructors,

    handleDeleteCourse,
    handleDeleteProduct,
    handleDeleteStudent,
    handleDeleteInCarInst,
    handleDeleteInClassInst,

    navToCourse,
    navToProduct,
    navToStudent,
    navToInCarInst,
    navToInClassInst,

    handleDismissErrorAlert,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { homeButtonHandlers };
};

export default useHomeScreenButtonHandlers;
