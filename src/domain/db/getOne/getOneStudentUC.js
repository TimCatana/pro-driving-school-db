import axios from "axios";

const getOneStudentUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/student/getOne/${primary_key}`);
};

export default getOneStudentUC;
