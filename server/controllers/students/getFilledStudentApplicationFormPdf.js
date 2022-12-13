const { studentTableHeadings } = require("../../constants/dbConstants");
const fillStudentApplicationFormPdf = require("./utils/pdf/FillStudentApplicationFormPdf");
const makeDb = require("../../util/makeDb");
const open = require("open");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentApplicationFormPdf = async (req, res) => {
  const sql = `
  SELECT 
    * 
  FROM 
    ${studentTableHeadings.tableName}  
  WHERE 
    ${studentTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    const result = await db.query(sql, [req.params.primary_key]);
    await fillStudentApplicationFormPdf(result[0]);
    await open(`${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/student_application_form_output.pdf`);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to get student application form pdf -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = getFilledStudentApplicationFormPdf;
