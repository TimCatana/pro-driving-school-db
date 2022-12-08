const fillStudentInCarEvaluationPdf = require("./utils/pdf/fillStudentInCarEvaluationPdf");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentInCarEvaluationPdf = async (req, res) => {
  // get student data from database

  // pass student data to functions below
  await fillStudentInCarEvaluationPdf();

  // if error, need to do something (try catch individually, if one fails, the other can work)

  // send result
  res.send("");
};

module.exports = getFilledStudentInCarEvaluationPdf;
