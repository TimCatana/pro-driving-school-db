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
    handleDeleteInClassInst,
    displaying,
    Data,
    displayData,
    navToCourse,
    navToProduct,
    navToStudent,
    navToInClassInst,
    navToInCarInst,
  } = useHomeScreen();

  return (
    <div>
      <h1>HomeScreen</h1>
      <button onClick={handleGetCourses}>courses</button>
      <button onClick={handleGetProducts}>products</button>
      <button onClick={handleGetStudents}>students</button>
      <button onClick={handleGetInClassInstructors}>in class inst</button>
      <button onClick={handleGetInCarInstructors}>in car nst</button>

      {!isLoading &&
        displaying === Data.COURSES &&
        displayData.map((data) => (
          <>
            {data.id}, {data.courseId}, {data.capacity}, {data.start_date},{" "}
            {data.end_date},{/* <Link to="/">Home</Link> */}\
            <button
              key={data.id}
              onClick={() => {
                navToCourse(data.id);
              }}
            >
              nav to course with id {data.id}
            </button>
          </>
        ))}

      {!isLoading &&
        displaying === Data.PRODUCTS &&
        displayData.map((data) => (
          <>
            {data.id}, {data.productId}, {data.price}, {data.productId}{" "}
            <button
              key={data.id}
              onClick={() => {
                navToProduct(data.id);
              }}
            >
              nav to product with id {data.id}
            </button>
          </>
        ))}

      {!isLoading &&
        displaying === Data.STUDENTS &&
        displayData.map((data) => (
          <>
            {data.id}, {data.first_name}, {data.middle_name}, {data.last_name},{" "}
            {data.date_of_birth}, {data.address}, {data.address_city},{" "}
            {data.address_postal_code},{data.cell_phone_number},{" "}
            {data.drivers_license_date_issued}, {data.drivers_license_exp_date},{" "}
            {data.drivers_license_id}, {data.purchased_product},{" "}
            {data.purchased_course}
            <button
              key={data.id}
              onClick={() => {
                navToStudent(data.id);
              }}
            >
              nav to student with id {data.id}
            </button>
          </>
        ))}

      {!isLoading &&
        displaying === Data.IN_CLASS_INST &&
        displayData.map((data) => (
          <>
            {data.id}, {data.first_name}, {data.last_name},{" "}
            {data.inst_drivers_license_id}, {data.inst_drivers_license_exp_date}
            <button
              key={data.id}
              onClick={() => {
                navToInClassInst(data.id);
              }}
            >
              nav to in class inst with id {data.id}
            </button>
          </>
        ))}

      {!isLoading &&
        displaying === Data.IN_CAR_INST &&
        displayData.map((data) => (
          <>
            {data.id}, {data.first_name}, {data.last_name},{" "}
            {data.inst_drivers_license_id}, {data.inst_drivers_license_exp_date}
            , {data.g_drivers_license_id}, {data.g_drivers_license_exp_date}
            <button
              key={data.id}
              onClick={() => {
                navToInCarInst(data.id);
              }}
            >
              nav to in course inst with id {data.id}
            </button>
          </>
        ))}

      {/* {displaying === Data.COURSES && <h1>displaying courses</h1>}
      {displaying === Data.PRODUCTS && <h1>displaying products</h1>}
      {displaying === Data.STUDENTS && <h1>displaying students</h1>}
      {displaying === Data.IN_CLASS_INST && <h1>displaying In class inst</h1>}
      {displaying === Data.IN_CAR_INST && <h1>displaying in car inst</h1>} */}

      {/* <button onClick={handleGetSpecificInCarInstructor}>ONE in car nst</button>
      <button onClick={handleGetSpecificInClassInstructor}>ONE in class nst</button>
      <button onClick={handleGetSpecificCourse}>ONE course</button>
      <button onClick={handleGetSpecificProduct}>ONE product</button>
      <button onClick={handleGetSpecificStudent}>ONE student</button>

      <button onClick={handleDeleteCourse}>DELETE COURSE</button>
      <button onClick={handleDeleteProduct}>DELETE product</button>
      <button onClick={handleDeleteStudent}>DELETE student</button>
      <button onClick={handleDeleteInCarInst}>DELETE in car inst</button>
      <button onClick={handleDeleteInClassInst}>DELETE in class inst</button> */}
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
