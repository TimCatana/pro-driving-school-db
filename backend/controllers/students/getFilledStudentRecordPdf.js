const fillStudentRecordPdf = require("./utils/pdf/fillStudentRecordPdf");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentRecordPdf = async (req, res) => {
  // get student data from database

  // pass student data to functions below
  await fillStudentRecordPdf();

  // if error, need to do something (try catch individually, if one fails, the other can work)

  // send result
  res.send("");
};

module.exports = getFilledStudentRecordPdf;
