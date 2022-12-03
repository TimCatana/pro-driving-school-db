import axios from "axios";

const getStudentPdf = async (primary_key) => {
  return await axios.get(
    `http://localhost:4400/student/getFilledPdf/${primary_key}`
  );
};

export default getStudentPdf;
