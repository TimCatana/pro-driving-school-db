import axios from "axios";

const getAllCoursesUC = async () => {
  return await axios.get(`http://localhost:4400/course/getAll`);
};

export default getAllCoursesUC;
