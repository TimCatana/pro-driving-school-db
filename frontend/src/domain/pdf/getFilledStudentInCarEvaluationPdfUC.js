import axios from "axios";

const getFilledStudentInCarEvaluationPdfUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/student/getFilledStudentInCarEvaluationPdf/${primary_key}`);
};

export default getFilledStudentInCarEvaluationPdfUC;
