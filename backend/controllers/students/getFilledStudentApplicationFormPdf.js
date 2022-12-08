const fillStudentApplicationFormPdf = require("./utils/pdf/FillStudentApplicationFormPdf");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentApplicationFormPdf = async (req, res) => {
  // get student data from database

  await fillStudentApplicationFormPdf();

  // if error, need to do something (try catch individually, if one fails, the other can work)

  // send result
  res.send("");
};

module.exports = getFilledStudentApplicationFormPdf;
