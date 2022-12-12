import axios from "axios";

const getFilledStudentInvoicePdfUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/student/getFilledStudentInvoicePdf/${primary_key}`);
};

export default getFilledStudentInvoicePdfUC;
