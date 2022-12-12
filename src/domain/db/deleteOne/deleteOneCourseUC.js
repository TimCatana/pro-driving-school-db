import axios from "axios";

const deleteOneCourseUC = async (primary_key) => {
  return await axios.delete(`http://localhost:4400/course/delete/${primary_key}`);
};

export default deleteOneCourseUC;
