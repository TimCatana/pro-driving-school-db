import axios from "axios";

const getFilledStudentInCarRecordPdfUC = async (primary_key) => {
  return await axios.get(
    `http://localhost:4400/student/getFilledStudentInCarRecordPdf/${primary_key}`
  );
};

export default getFilledStudentInCarRecordPdfUC;
