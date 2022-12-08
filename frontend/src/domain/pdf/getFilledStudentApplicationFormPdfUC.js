import axios from "axios";

const getFilledStudentApplicationFormPdfUC = async (primary_key) => {
  return await axios.get(
    `http://localhost:4400/student/getFilledStudentApplicationFormPdf/${primary_key}`
  );
};

export default getFilledStudentApplicationFormPdfUC;
