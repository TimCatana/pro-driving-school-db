import axios from "axios";

const getAllStudentsUC = async () => {
  return await axios.get(`http://localhost:4400/student/getAll`);
};

export default getAllStudentsUC;
