import AlertVariants from "../../../../domain/constants/AlertVariants";
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

    try {
      const result = await getAllCoursesUC();
      homeState.uiModifiersObject.setDisplayData(result.data);
      homeState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      homeState.uiModifiersObject.setDisplayData([]);
      homeState.uiModifiersObject.setFailedToGetData(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetProducts = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.PRODUCTS);

    try {
      const result = await getAllProductsUC();
      homeState.uiModifiersObject.setDisplayData(result.data);
      homeState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      homeState.uiModifiersObject.setDisplayData([]);
      homeState.uiModifiersObject.setFailedToGetData(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetStudents = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.STUDENTS);

    try {
      const result = await getAllStudentsUC();
      homeState.uiModifiersObject.setDisplayData(result.data);
      homeState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      homeState.uiModifiersObject.setDisplayData([]);
      homeState.uiModifiersObject.setFailedToGetData(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.IN_CLASS_INST);

    try {
      const result = await getAllInClassInstructorsUC();
      homeState.uiModifiersObject.setDisplayData(result.data);
      homeState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      homeState.uiModifiersObject.setDisplayData([]);
      homeState.uiModifiersObject.setFailedToGetData(true);
    }

    homeState.uiModifiersObject.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInCarInstructors = async () => {
    homeState.uiModifiersObject.setIsLoading(true);
    homeState.uiModifiersObject.setDisplaying(homeState.Data.IN_CAR_INST);

    try {
      const result = await getAllInCarInstructorsUC();
      homeState.uiModifiersObject.setDisplayData(result.data);
      homeState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      homeState.uiModifiersObject.setDisplayData([]);
      homeState.uiModifiersObject.setFailedToGetData(true);
    }

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

    try {
      await deleteOneCourseUC(primaryKey);
      homeState.messageObject.setMessage("SUCCESS - Successfully deleted course");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetCourses();
    } catch (e) {
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

    try {
      await deleteOneProductUC(primaryKey);
      homeState.messageObject.setMessage("SUCCESS - Successfully deleted product");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetProducts();
    } catch (e) {
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

    try {
      await deleteOneStudentUC(primaryKey);
      homeState.messageObject.setMessage("SUCCESS - Successfully deleted student");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetStudents();
    } catch (e) {
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

    try {
      await deleteOneInCarInstructorUC(primaryKey);
      homeState.messageObject.setMessage("SUCCESS - Successfully deleted in car instructor");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetInCarInstructors();
    } catch (e) {
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

    try {
      await deleteOneInClassInstructorUC(primaryKey);
      homeState.messageObject.setMessage("SUCCESS - Successfully deleted in class instructor");
      homeState.messageObject.setMessageColor(AlertVariants.SUCCESS);
      homeState.messageObject.setShowMessage(true);
      handleGetInClassInstructors();
    } catch (e) {
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
