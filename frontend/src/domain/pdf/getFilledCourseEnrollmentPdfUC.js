import axios from "axios";

const getFilledCourseEnrollmentPdfUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/course/getFilledCourseEnrollmentPdf/${primary_key}`);
};

export default getFilledCourseEnrollmentPdfUC;
