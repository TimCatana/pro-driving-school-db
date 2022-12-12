import axios from "axios";

const handleGetOneCourseUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/course/getOne/${primary_key}`);
};

export default handleGetOneCourseUC;
