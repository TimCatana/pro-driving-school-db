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
    homeState.setIsLoading(true);

    const result = await getAllCoursesUC();

    if (result.data.status == 200) {
      homeState.setDisplaying(homeState.Data.COURSES);
      homeState.setDisplayData(result.data.query);
    } else {
      console.log("failed");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetProducts = async () => {
    homeState.setIsLoading(true);

    const result = await getAllProductsUC();

    if (result.data.status == 200) {
      homeState.setDisplaying(homeState.Data.PRODUCTS);
      homeState.setDisplayData(result.data.query);
    } else {
      console.log("failed");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetStudents = async () => {
    homeState.setIsLoading(true);

    const result = await getAllStudentsUC();

    if (result.data.status == 200) {
      homeState.setDisplaying(homeState.Data.STUDENTS);
      homeState.setDisplayData(result.data.query);
    } else {
      console.log("failed");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInClassInstructors = async () => {
    homeState.setIsLoading(true);

    const result = await getAllInClassInstructorsUC();

    if (result.data.status == 200) {
      homeState.setDisplaying(homeState.Data.IN_CLASS_INST);
      homeState.setDisplayData(result.data.query);
    } else {
      console.log("failed");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetInCarInstructors = async () => {
    homeState.setIsLoading(true);

    const result = await getAllInCarInstructorsUC();

    if (result.data.status == 200) {
      homeState.setDisplaying(homeState.Data.IN_CAR_INST);
      homeState.setDisplayData(result.data.query);
    } else {
      console.log("failed");
    }

    homeState.setIsLoading(false);
  };

  /******************/
  /***** DELETE *****/
  /******************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteCourse = async (primaryKey) => {
    homeState.setIsLoading(true);

    const result = await deleteOneCourseUC(primaryKey);

    if (result.data.status == 200) {
      console.log("successfully deleted item");
      handleGetCourses();
    } else {
      console.log("failed to delete item");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteProduct = async (primaryKey) => {
    homeState.setIsLoading(true);

    const result = await deleteOneProductUC(primaryKey);

    if (result.data.status == 200) {
      console.log("successfully deleted item");
      handleGetProducts();
    } else {
      console.log("failed to delete item");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteStudent = async (primaryKey) => {
    homeState.setIsLoading(true);

    const result = await deleteOneStudentUC(primaryKey);

    if (result.data.status == 200) {
      console.log("successfully deleted item");
      handleGetStudents();
    } else {
      console.log("failed to delete item");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInst = async (primaryKey) => {
    homeState.setIsLoading(true);

    const result = await deleteOneInCarInstructorUC(primaryKey);

    if (result.data.status == 200) {
      console.log("successfully deleted item");
      handleGetInCarInstructors();
    } else {
      console.log("failed to delete item");
    }

    homeState.setIsLoading(false);
  };
  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInClassInst = async (primaryKey) => {
    homeState.setIsLoading(true);

    const result = await deleteOneInClassInstructorUC(primaryKey);

    if (result.data.status == 200) {
      console.log("successfully deleted item");
      handleGetInClassInstructors();
    } else {
      console.log("failed to delete item");
    }

    homeState.setIsLoading(false);
  };

  /**********************/
  /***** NAVIGATION *****/
  /**********************/

  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToCourse = (primaryKey) => {
    if (!homeState.isLoading) {
      homeState.navigation(`/course/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToProduct = (primaryKey) => {
    if (!homeState.isLoading) {
      homeState.navigation(`/product/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToStudent = (primaryKey) => {
    if (!homeState.isLoading) {
      homeState.navigation(`/student/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToInClassInst = (primaryKey) => {
    if (!homeState.isLoading) {
      homeState.navigation(`/in-class-inst/${primaryKey}`);
    }
  };
  /**
   *  Navigates back to the login screen if no process is currently running.
   */
  const navToInCarInst = (primaryKey) => {
    if (!homeState.homeState.isLoading) {
      homeState.navigation(`/in-car-inst/${primaryKey}`);
    }
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
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { homeButtonHandlers };
};

export default useHomeScreenButtonHandlers;
