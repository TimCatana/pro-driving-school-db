const getFilledStudentInCarRecordPdf = require("./utils/pdf/getFilledStudentInCarRecordPdf");
const getFilledStudentRecordPdf = require("./utils/pdf/getFilledStudentRecordPdf");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledPdf = async (req, res) => {
  // get student data from database

  // pass student data to functions below
  await getFilledStudentRecordPdf();
  await getFilledStudentInCarRecordPdf();

  // if error, need to do something (try catch individually, if one fails, the other can work)

  // send result
  res.send("")
};

module.exports = getFilledPdf;
