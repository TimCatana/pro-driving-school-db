import React from "react";
import useHomeScreen from "./useHomeScreen";

const HomeScreen = () => {
  const {
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
    handleDeleteInClassInst
  } = useHomeScreen();

  return (
    <div>
      <h1>HomeScreen</h1>
      <button onClick={handleGetCourses}>courses</button>
      <button onClick={handleGetProducts}>products</button>
      <button onClick={handleGetStudents}>students</button>
      <button onClick={handleGetInClassInstructors}>in class inst</button>
      <button onClick={handleGetInCarInstructors}>in car nst</button>

      <button onClick={handleGetSpecificInCarInstructor}>ONE in car nst</button>
      <button onClick={handleGetSpecificInClassInstructor}>ONE in class nst</button>
      <button onClick={handleGetSpecificCourse}>ONE course</button>
      <button onClick={handleGetSpecificProduct}>ONE product</button>
      <button onClick={handleGetSpecificStudent}>ONE student</button>

      <button onClick={handleDeleteCourse}>DELETE COURSE</button>
      <button onClick={handleDeleteProduct}>DELETE product</button>
      <button onClick={handleDeleteStudent}>DELETE student</button>
      <button onClick={handleDeleteInCarInst}>DELETE in car inst</button>
      <button onClick={handleDeleteInClassInst}>DELETE in class inst</button>
    </div>
  );
};

/**
 * const result = await axios.post ("nodehost:nodeport", {
 * id: id,
 * name: name,
 * })
 */

export default HomeScreen;
