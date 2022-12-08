const fillCourseEnrollmentPdf = require("./utils/pdf/fillCourseEnrollmentPdf");
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledCourseEnrollmentPdf = async (req, res) => {
  // get student data from database

  // pass student data to functions below
  await fillCourseEnrollmentPdf();

  // if error, need to do something (try catch individually, if one fails, the other can work)

  // send result
  res.send("");
};

module.exports = getFilledCourseEnrollmentPdf;
