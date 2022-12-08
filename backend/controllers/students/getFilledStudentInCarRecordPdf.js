const fillStudentInCarRecordPdf = require("./utils/pdf/fillStudentInCarRecordPdf");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentInCarRecordPdf = async (req, res) => {
  // get student data from database

  // pass student data to functions below
  await fillStudentInCarRecordPdf();

  // if error, need to do something (try catch individually, if one fails, the other can work)

  // send result
  res.send("");
};

module.exports = getFilledStudentInCarRecordPdf;
