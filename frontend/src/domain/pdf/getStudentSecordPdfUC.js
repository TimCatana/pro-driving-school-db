import axios from "axios";

const getStudentRecordPdf = async (primary_key) => {
  return await axios.get(`http://localhost:4400/student/getFilledPdf/${primary_key}`);
};

export default getStudentRecordPdf;
