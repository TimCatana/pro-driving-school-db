import axios from "axios";

const getFilledStudentRecordPdfUC = async (primary_key) => {
  return await axios.get(
    `http://localhost:4400/student/getFilledStudentRecordPdf/${primary_key}`
  );
};

export default getFilledStudentRecordPdfUC;
