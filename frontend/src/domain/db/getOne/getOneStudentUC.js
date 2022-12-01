import axios from "axios";

const handleGetOneStudentUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/student/getOne/${primary_key}`);
};

export default handleGetOneStudentUC;
