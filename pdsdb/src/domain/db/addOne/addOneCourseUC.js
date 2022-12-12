import axios from "axios";

const addOneCourseUC = async (courseObject) => {
  return await axios.post(`http://localhost:4400/course/add`, {
    courseId: courseObject.courseId,
    courseCapacity: courseObject.courseCapacity,
    courseStartDate: courseObject.courseStartDate,
    courseEndDate: courseObject.courseEndDate,
    courseIsDigital: courseObject.courseIsDigital,
    courseInClassInstructor: courseObject.courseInClassInstructor,
  });
};

export default addOneCourseUC;
