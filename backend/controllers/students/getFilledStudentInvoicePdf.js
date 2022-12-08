const fillStudentInvoicePdf = require("./utils/pdf/fillStudentInvoicePdf");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentInvoicePdf = async (req, res) => {
  // get student data from database

  // pass student data to functions below
  // await getFilledStudentRecordPdf();
  // await getFilledStudentInCarRecordPdf();
  // await getFilledStudentApplicationFormPdf();
  await fillStudentInvoicePdf();
  // await getFilledStudentInCarEvaluationPdf();

  // if error, need to do something (try catch individually, if one fails, the other can work)

  // send result
  res.send("");
};

module.exports = getFilledStudentInvoicePdf;
