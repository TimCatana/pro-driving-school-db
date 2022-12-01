import axios from "axios";

const deleteOneStudentUC = async (primary_key) => {
  return await axios.delete(
    `http://localhost:4400/student/delete/${primary_key}`
  );
};

export default deleteOneStudentUC;
