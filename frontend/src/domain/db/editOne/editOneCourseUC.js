import axios from "axios";

const editOneCourseUC = async (courseObject, primary_key) => {
  await axios.put(`http://localhost:4400/course/edit/${primary_key}`, {
    courseId: courseObject.courseId,
    courseCapacity: courseObject.courseCapacity,
    courseStartDate: courseObject.courseStartDate,
    courseEndDate: courseObject.courseEndDate,
    courseIsDigital: courseObject.courseIsDigital,
    courseInClassInstructor: courseObject.courseInClassInstructor,
  });
};

export default editOneCourseUC;
